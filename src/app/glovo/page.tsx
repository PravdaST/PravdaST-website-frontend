import { Metadata } from 'next'
import { getGlovoMetadata } from './metadata'
import GlovoClientPage from './GlovoClientPage'

export async function generateMetadata(): Promise<Metadata> {
  return await getGlovoMetadata()
}

export default function GlovoPage() {
  return <GlovoClientPage />
}