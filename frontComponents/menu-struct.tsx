import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Search, Calendar } from "lucide-react"

export default function Component() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Football Everywhere</h1>
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="create-lobby">Create Lobby</TabsTrigger>
          <TabsTrigger value="search-lobby">Search Lobby</TabsTrigger>
          <TabsTrigger value="book-location">Book Location</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <Card>
            <CardHeader>
              <CardTitle>Current Football Activity</CardTitle>
              <CardDescription>See how many people are playing right now</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <MapPin className="mr-2" />
                    Central Park Field
                  </span>
                  <span className="flex items-center">
                    <Users className="mr-2" />
                    12 players
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <MapPin className="mr-2" />
                    Riverside Pitch
                  </span>
                  <span className="flex items-center">
                    <Users className="mr-2" />
                    8 players
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="create-lobby">
          <Card>
            <CardHeader>
              <CardTitle>Create a New Lobby</CardTitle>
              <CardDescription>Set up a game and invite players</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="lobby-name">Lobby Name</Label>
                <Input id="lobby-name" placeholder="Enter lobby name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-players">Max Players</Label>
                <Input id="max-players" type="number" placeholder="Enter max players" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Select location" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Create Lobby</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="search-lobby">
          <Card>
            <CardHeader>
              <CardTitle>Search for Lobbies</CardTitle>
              <CardDescription>Find games in your area</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Search className="text-muted-foreground" />
                <Input placeholder="Search lobbies..." />
              </div>
              <div className="space-y-2">
                <Label>Location Filter</Label>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Nearby</Button>
                  <Button variant="outline" size="sm">Popular</Button>
                  <Button variant="outline" size="sm">All</Button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Available Lobbies</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Central Park Game</span>
                    <Button size="sm">Join</Button>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Riverside Pitch Match</span>
                    <Button size="sm">Join</Button>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="book-location">
          <Card>
            <CardHeader>
              <CardTitle>Book a Location</CardTitle>
              <CardDescription>Reserve a field for your game</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="book-location">Select Location</Label>
                <Input id="book-location" placeholder="Choose a location" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="book-date">Date</Label>
                <Input id="book-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="book-time">Time</Label>
                <Input id="book-time" type="time" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book Location</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
