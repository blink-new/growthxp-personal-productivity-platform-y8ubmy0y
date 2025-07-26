import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  Zap, 
  Target, 
  CheckCircle, 
  TrendingUp, 
  Calendar,
  Star,
  Flame,
  Trophy
} from 'lucide-react'

const Dashboard = () => {
  // Mock data - will be replaced with real data later
  const userStats = {
    totalXP: 2847,
    level: 12,
    xpToNextLevel: 153,
    xpForNextLevel: 300,
    todayXP: 85,
    streak: 7,
    completedToday: 6,
    totalToday: 8
  }

  const growthAreas = [
    { name: 'Work', level: 8, xp: 1240, color: 'bg-blue-500', progress: 75 },
    { name: 'Health', level: 6, xp: 890, color: 'bg-green-500', progress: 60 },
    { name: 'Learning', level: 10, xp: 1580, color: 'bg-purple-500', progress: 85 },
    { name: 'Exercise', level: 4, xp: 520, color: 'bg-orange-500', progress: 40 }
  ]

  const recentAchievements = [
    { name: 'Week Warrior', description: '7-day streak completed', icon: '🔥' },
    { name: 'Learning Master', description: 'Reached level 10 in Learning', icon: '📚' },
    { name: 'Task Crusher', description: '50 tasks completed', icon: '⚡' }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Welcome back! 👋
            </h2>
            <p className="text-muted-foreground">
              You're on a {userStats.streak}-day streak. Keep it up!
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-2xl font-bold text-orange-500">
                {userStats.streak}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total XP</CardTitle>
            <Zap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {userStats.totalXP.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +{userStats.todayXP} today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Level</CardTitle>
            <Star className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {userStats.level}
            </div>
            <div className="mt-2">
              <Progress 
                value={(userStats.xpToNextLevel / userStats.xpForNextLevel) * 100} 
                className="h-2"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {userStats.xpToNextLevel}/{userStats.xpForNextLevel} to level {userStats.level + 1}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Progress</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {userStats.completedToday}/{userStats.totalToday}
            </div>
            <div className="mt-2">
              <Progress 
                value={(userStats.completedToday / userStats.totalToday) * 100} 
                className="h-2"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Tasks completed
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">
              +24%
            </div>
            <p className="text-xs text-muted-foreground">
              XP increase vs last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Growth Areas Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Growth Areas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {growthAreas.map((area) => (
              <div key={area.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${area.color}`} />
                    <span className="font-medium">{area.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      Lv. {area.level}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {area.xp} XP
                  </span>
                </div>
                <Progress value={area.progress} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-accent" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl">{achievement.icon}</div>
                <div>
                  <h4 className="font-medium">{achievement.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg border border-primary/20 transition-colors">
              <div className="text-center">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="font-medium">Add Task</p>
                <p className="text-xs text-muted-foreground">Create new task</p>
              </div>
            </button>
            
            <button className="p-4 bg-accent/10 hover:bg-accent/20 rounded-lg border border-accent/20 transition-colors">
              <div className="text-center">
                <Target className="w-6 h-6 mx-auto mb-2 text-accent" />
                <p className="font-medium">Set Goal</p>
                <p className="text-xs text-muted-foreground">Define new goal</p>
              </div>
            </button>
            
            <button className="p-4 bg-green-500/10 hover:bg-green-500/20 rounded-lg border border-green-500/20 transition-colors">
              <div className="text-center">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-500" />
                <p className="font-medium">View Stats</p>
                <p className="text-xs text-muted-foreground">Check progress</p>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard