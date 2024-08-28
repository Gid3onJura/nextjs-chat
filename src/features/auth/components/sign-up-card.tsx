import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const SignUpCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>Username</p>
      </CardContent>
      <CardFooter>
        <p>Password</p>
      </CardFooter>
    </Card>
  )
}
