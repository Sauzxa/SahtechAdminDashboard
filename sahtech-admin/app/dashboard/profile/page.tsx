import { ProfileForm } from "@/components/dashboard/profile-form"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
      </div>

      <ProfileForm />
    </div>
  )
}
