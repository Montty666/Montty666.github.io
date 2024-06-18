import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import { GoogleOAuthProvider } from '@react-oauth/google';

const rootElement = document.getElementById("root")
const root = createRoot(rootElement!)
root.render(
    <>
    <GoogleOAuthProvider clientId="41457360610-gfl0fhaula4da30ircm6oj3v7kisgvt7.apps.googleusercontent.com"><App /></GoogleOAuthProvider>
    </>
)
