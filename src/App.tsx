import {getApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {Suspense} from "react"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {AuthProvider, FirestoreProvider, useFirebaseApp} from "reactfire"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
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
	}
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