"use client"

import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"

import SignInForm from "@/components/forms/signin-form"
import { Shell } from "@/components/shells/shell"

interface SignInPageProps extends React.HTMLAttributes<HTMLDivElement> {}

const SignInPage = ({ className, ...props }: SignInPageProps) => {
  const { data: session } = useSession()
  if (session) redirect("/")

  return (
    <Shell>
      <SignInForm />
    </Shell>
  )
}

export default SignInPage
