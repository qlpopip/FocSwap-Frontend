import { Language } from '@pancakeswap/uikit'

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }
export const FIL: Language = { locale: 'fil-PH', language: 'Filipino', code: 'fil' }
export const KO: Language = { locale: 'ko-KR', language: '한국어', code: 'ko' }

export const languages = {
  'en-US': EN,
  'fil-PH': FIL,
  'ko-KR': KO,
}

const languageList = Object.values(languages)

export default languageList
