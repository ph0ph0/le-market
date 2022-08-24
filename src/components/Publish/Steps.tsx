import { ReactElement, useEffect } from 'react'
import { useFormikContext } from 'formik'
import {
  wizardSteps,
  initialPublishFeedback,
  initialValues
} from './_constants'
import { useWeb3 } from '@context/Web3'
import { FormPublishData, PublishFeedback } from './_types'
import { getOceanConfig } from '@utils/ocean'
import router from 'next/router'

export function Steps({
  feedback
}: {
  feedback: PublishFeedback
}): ReactElement {
  const { chainId, accountId } = useWeb3()
  const { values, setFieldValue, touched, setTouched } =
    useFormikContext<FormPublishData>()

  // auto-sync user chainId & account into form data values
  useEffect(() => {
    if (!chainId || !accountId) return

    setFieldValue('user.chainId', chainId)
    setFieldValue('user.accountId', accountId)
  }, [chainId, accountId, setFieldValue])

  useEffect(() => {
    if (!chainId) return

    // Reset the pricing values on chainId change:
    // - the user needs to update the pricing schema on network changes
    // - if the tx has been started, don't restore pricing values
    if (values.pricing.price && values.feedback[1].status === 'pending') {
      setFieldValue('pricing', initialValues.pricing)
      router.push(`/publish/3`)
    }
  }, [chainId, setFieldValue])

  // auto-sync publish feedback into form data values
  useEffect(() => {
    setFieldValue('feedback', feedback)
  }, [feedback, setFieldValue])

  // auto-switch some feedback content based on pricing type
  useEffect(() => {
    setFieldValue('feedback', {
      ...feedback,
      '1': {
        ...feedback['1'],
        txCount: 1,
        description: initialPublishFeedback['1'].description
      }
    })
  }, [values.pricing.type, feedback, setFieldValue])

  // Auto-change default providerUrl on user network change
  useEffect(() => {
    if (
      !values?.user?.chainId ||
      values?.services[0]?.providerUrl.custom === true
    )
      return

    const config = getOceanConfig(values.user.chainId)
    if (config) {
      setFieldValue('services[0].providerUrl', {
        url: config.providerUri,
        valid: true,
        custom: false
      })
    }

    setTouched({ ...touched, services: [{ providerUrl: { url: true } }] })
  }, [
    values?.user?.chainId,
    values?.services[0]?.providerUrl.custom,
    setFieldValue,
    setTouched
  ])

  const { component } = wizardSteps.filter((stepContent) => {
    return stepContent.step === values.user.stepCurrent
  })[0]

  return component
}
