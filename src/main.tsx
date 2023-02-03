import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import {FirebaseAppProvider} from "reactfire"
import App from "./App"
import {firebaseConfig} from "./config/firebase"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<App />
		</FirebaseAppProvider>
	</React.StrictMode>
)
