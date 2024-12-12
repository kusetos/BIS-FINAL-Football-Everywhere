import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, MapPin, User, Shield, LogOut } from "lucide-react"

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [locationRadius, setLocationRadius] = useState(10)

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notifications">Enable Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive updates about games and lobbies</p>
            </div>
            <Switch
              id="notifications"
              checked={notificationsEnabled}
              onCheckedChange={setNotificationsEnabled}
            />
          </div>
          {notificationsEnabled && (
            <div className="space-y-2">
              <Label>Notification Types</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="new-games" />
                  <label htmlFor="new-games">New games in your area</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="game-reminders" />
                  <label htmlFor="game-reminders">Game reminders</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="friend-activity" />
                  <label htmlFor="friend-activity">Friend activity</label>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Location Settings</CardTitle>
          <CardDescription>Customize your location preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="default-location">Default Location</Label>
            <Input id="default-location" placeholder="Enter your default location" />
          </div>
          <div className="space-y-2">
            <Label>Search Radius (km)</Label>
            <div className="flex items-center space-x-4">
              <Slider
                value={[locationRadius]}
                onValueChange={(value) => setLocationRadius(value[0])}
                max={50}
                step={1}
              />
              <span className="w-12 text-center">{locationRadius}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Your username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="skill-level">Skill Level</Label>
            <Select>
              <SelectTrigger id="skill-level">
                <SelectValue placeholder="Select your skill level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="pro">Professional</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy and Security</CardTitle>
          <CardDescription>Manage your privacy settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="profile-visibility">Profile Visibility</Label>
              <p className="text-sm text-muted-foreground">Make your profile visible to other users</p>
            </div>
            <Switch id="profile-visibility" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="location-sharing">Location Sharing</Label>
              <p className="text-sm text-muted-foreground">Share your location with other players</p>
            </div>
            <Switch id="location-sharing" />
          </div>
          <Button variant="outline" className="w-full">Change Password</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
          <CardDescription>Irreversible account actions</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" className="w-full">Delete Account</Button>
        </CardContent>
      </Card>

      <Button className="w-full" variant="secondary">
        <LogOut className="w-4 h-4 mr-2" />
        Log Out
      </Button>
    </div>
  )
}
