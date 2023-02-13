import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {Component, Suspense} from "react"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {AuthProvider, FirestoreProvider, useFirebaseApp} from "reactfire"
import Compon from "./pages/Compon"
import Dashboard from "./pages/Dashboard"
import LandingPage from "./pages/Landing"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/dashboard",
		element: <Dashboard />
	},
	{
		path: "/signup",
		element: <SignUp />
	},
	{
		path: "/compon",
		element: <Compon />
	},
	{
		path: "/landingpage",
		element: <LandingPage />
	},
])


function App() {
	const app = useFirebaseApp()
	const db = getFirestore(app)

	const auth = getAuth(app)
	return (
		<FirestoreProvider sdk={db}>
			<AuthProvider sdk={auth}>
				<RouterProvider router={router} />
			</AuthProvider>
		</FirestoreProvider>
	)
}

export default App