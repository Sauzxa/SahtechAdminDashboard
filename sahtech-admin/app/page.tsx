import { LoginForm } from "@/components/auth/login-form"

export default function Home() {
  // In a real app, you would check if the user is already authenticated
  // and redirect to the dashboard if they are
  // const isAuthenticated = await checkAuth();
  // if (isAuthenticated) {
  //   redirect("/dashboard");
  // }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-white to-teal-50 dark:from-gray-950 dark:to-gray-900">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center space-y-2">
          <img src="/logo.png" alt="Sahtech Logo" className="h-16 w-auto" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Enter your credentials to access the Sahtech admin panel
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
