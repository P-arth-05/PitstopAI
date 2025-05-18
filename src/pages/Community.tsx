
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Search, User, Users, MessageCircle, Heart, Bookmark, Share2, PlusCircle, CheckCircle, Star, Filter } from "lucide-react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("discussions");
  
  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Community Support</h1>
        <p className="text-muted-foreground mb-8">Connect with mechanics and other drivers to solve vehicle issues</p>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search discussions..." 
                  className="pl-10 w-full sm:w-80"
                />
              </div>
              <Button className="gap-2 w-full sm:w-auto">
                <MessageSquare className="h-4 w-4" />
                Start Discussion
              </Button>
            </div>
            
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-6">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="discussions" className="flex gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Discussions
                </TabsTrigger>
                <TabsTrigger value="mechanics" className="flex gap-2">
                  <User className="h-4 w-4" />
                  Mechanics
                </TabsTrigger>
                <TabsTrigger value="groups" className="flex gap-2">
                  <Users className="h-4 w-4" />
                  Groups
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="discussions" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Discussions</CardTitle>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-1 h-8">
                          <Filter className="h-3.5 w-3.5" />
                          Filter
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Strange noise when accelerating in my Tesla Model 3",
                          author: "Michael Johnson",
                          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                          time: "2 hours ago",
                          replies: 8,
                          likes: 12,
                          solved: true
                        },
                        {
                          title: "Battery drain issue with RAV4 Hybrid",
                          author: "Sarah Williams",
                          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                          time: "Yesterday",
                          replies: 15,
                          likes: 7,
                          solved: false
                        },
                        {
                          title: "Best OBD2 scanner for BMW 3 Series?",
                          author: "David Chen",
                          avatar: "https://randomuser.me/api/portraits/men/71.jpg",
                          time: "2 days ago",
                          replies: 23,
                          likes: 19,
                          solved: true
                        },
                        {
                          title: "Rear camera not working after software update",
                          author: "Alex Morgan",
                          avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                          time: "3 days ago",
                          replies: 4,
                          likes: 3,
                          solved: false
                        },
                      ].map((post, index) => (
                        <div key={index} className="border rounded-xl p-4 hover:bg-muted/30 transition-colors cursor-pointer">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-3">
                              <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                                <img 
                                  src={post.avatar}
                                  alt={post.author}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium">{post.title}</h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                  <span>{post.author}</span>
                                  <span>•</span>
                                  <span>{post.time}</span>
                                  {post.solved && (
                                    <>
                                      <span>•</span>
                                      <span className="flex items-center text-green-600 gap-1">
                                        <CheckCircle className="h-3.5 w-3.5" />
                                        Solved
                                      </span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6 mt-4 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{post.replies} replies</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              <span>{post.likes} likes</span>
                            </div>
                            <div className="flex items-center gap-1 ml-auto">
                              <Bookmark className="h-4 w-4" />
                            </div>
                            <div className="flex items-center gap-1">
                              <Share2 className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Load More
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="mechanics" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>Verified Mechanics</CardTitle>
                      <Button variant="outline" size="sm" className="gap-1 h-8">
                        <Filter className="h-3.5 w-3.5" />
                        Filter
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          name: "Robert Thompson",
                          avatar: "https://randomuser.me/api/portraits/men/22.jpg",
                          specialty: "Electric Vehicles",
                          rating: 4.9,
                          reviews: 124,
                          online: true
                        },
                        {
                          name: "Jennifer Lopez",
                          avatar: "https://randomuser.me/api/portraits/women/28.jpg",
                          specialty: "Hybrid Systems",
                          rating: 4.8,
                          reviews: 98,
                          online: false
                        },
                        {
                          name: "Thomas Wright",
                          avatar: "https://randomuser.me/api/portraits/men/56.jpg",
                          specialty: "Brake Systems",
                          rating: 4.7,
                          reviews: 87,
                          online: true
                        },
                        {
                          name: "Maria Garcia",
                          avatar: "https://randomuser.me/api/portraits/women/12.jpg",
                          specialty: "Diagnostics",
                          rating: 4.9,
                          reviews: 156,
                          online: false
                        },
                      ].map((mechanic, index) => (
                        <div key={index} className="border rounded-xl p-4 hover:bg-muted/30 transition-colors">
                          <div className="flex gap-3">
                            <div className="relative">
                              <div className="h-12 w-12 rounded-full overflow-hidden">
                                <img 
                                  src={mechanic.avatar}
                                  alt={mechanic.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              {mechanic.online && (
                                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                              )}
                            </div>
                            <div>
                              <h3 className="font-medium">{mechanic.name}</h3>
                              <div className="text-sm text-muted-foreground">{mechanic.specialty}</div>
                              <div className="flex items-center mt-1">
                                <div className="flex items-center gap-1">
                                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm font-medium">{mechanic.rating}</span>
                                </div>
                                <span className="text-xs text-muted-foreground ml-1">({mechanic.reviews} reviews)</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 grid grid-cols-2 gap-2">
                            <Button variant="outline" size="sm" className="w-full">
                              Profile
                            </Button>
                            <Button size="sm" className="w-full">
                              Message
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View All Mechanics
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="groups" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>Vehicle Groups</CardTitle>
                      <Button size="sm" className="gap-1 h-8">
                        <PlusCircle className="h-3.5 w-3.5" />
                        Create Group
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          name: "Tesla Owners Club",
                          icon: "https://image.shutterstock.com/image-photo/image-260nw-2242038931.jpg",
                          members: 4.8,
                          posts: 12.3,
                          joined: true
                        },
                        {
                          name: "Hybrid Car Enthusiasts",
                          icon: "https://t3.ftcdn.net/jpg/05/49/86/30/360_F_549863088_l8rbGaJWAwhxLHZzzdZG7Y3KZwjjW0JJ.jpg",
                          members: 3.2,
                          posts: 8.7,
                          joined: false
                        },
                        {
                          name: "DIY Car Repair",
                          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmgFPQl0j0HQ_UrPsMzHzn-rw-OyQY5GEgQ&usqp=CAU",
                          members: 7.1,
                          posts: 16.5,
                          joined: true
                        },
                        {
                          name: "EV Charging Network",
                          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0a_1E6OHw3kTlnrJYqDJnHCQsOKvYGD3pfQ&usqp=CAU",
                          members: 2.9,
                          posts: 5.4,
                          joined: false
                        },
                      ].map((group, index) => (
                        <div key={index} className="border rounded-xl p-4 hover:bg-muted/30 transition-colors">
                          <div className="flex gap-3">
                            <div className="h-12 w-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                              <img 
                                src={group.icon}
                                alt={group.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{group.name}</h3>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                <span>{group.members}k members</span>
                                <span>•</span>
                                <span>{group.posts}k posts</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <Button 
                              variant={group.joined ? "outline" : "default"}
                              size="sm" 
                              className="w-full"
                            >
                              {group.joined ? "Joined" : "Join Group"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Discover More Groups
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:w-1/3 space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Your Support Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <MessageCircle className="h-6 w-6 text-primary mb-2" />
                    <div className="text-2xl font-bold">7</div>
                    <div className="text-sm text-muted-foreground">Discussions</div>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <MessageSquare className="h-6 w-6 text-primary mb-2" />
                    <div className="text-2xl font-bold">32</div>
                    <div className="text-sm text-muted-foreground">Replies</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Your Activity
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Trending Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Electric Vehicle Battery Life",
                    "OBD2 Error Codes Explained",
                    "Hybrid System Troubleshooting",
                    "DIY Oil Change Tips",
                    "Brake Pad Replacement Guide"
                  ].map((topic, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors"
                    >
                      <span className="font-medium text-sm">#{topic.toLowerCase().replace(/\s+/g, '_')}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Top Mechanics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Robert Thompson",
                      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
                      specialty: "Electric Vehicles",
                      rating: 4.9
                    },
                    {
                      name: "Jennifer Lopez",
                      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
                      specialty: "Hybrid Systems",
                      rating: 4.8
                    },
                    {
                      name: "Thomas Wright",
                      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
                      specialty: "Brake Systems",
                      rating: 4.7
                    }
                  ].map((mechanic, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img 
                          src={mechanic.avatar}
                          alt={mechanic.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{mechanic.name}</div>
                        <div className="flex items-center">
                          <div className="text-xs text-muted-foreground">{mechanic.specialty}</div>
                          <div className="flex items-center ml-2">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-medium ml-1">{mechanic.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Mechanics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Community;
