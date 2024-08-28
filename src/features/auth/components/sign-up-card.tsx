import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import React, { useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { SignInFlow } from "../types"

interface SignUpCardProps {
  setState: (state: SignInFlow) => void
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Registrieren</CardTitle>
        <CardDescription>Nutze deine Email und Passwort</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="E-Mail"
            type="email"
            required
            className=""
          />
          <Input
            disabled={false}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Passwort"
            type="password"
            required
            className=""
          />
          <Input
            disabled={false}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Passwort wiederholen"
            type="password"
            required
            className=""
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Weiter
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button disabled={false} onClick={() => {}} variant="outline" size="lg" className="w-full relative">
            <FcGoogle className="size-5 absolute top-2.5 left-2.5 " />
            Weiter mit Google
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Du hast einen Account?{" "}
          <span onClick={() => setState("signIn")} className="text-sky-700 hover:underline cursor-pointer">
            Einloggen
          </span>
        </p>
      </CardContent>
    </Card>
  )
}
