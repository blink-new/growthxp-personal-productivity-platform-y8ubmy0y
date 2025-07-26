import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Target, 
  Briefcase, 
  Heart, 
  BookOpen, 
  Dumbbell, 
  User,
  TrendingUp,
  Star,
  Plus,
  Zap
} from 'lucide-react'

const GrowthAreas = () => {
  const growthAreas = [
    {
      id: 'work',
      name: 'Work & Career',
      icon: Briefcase,
      level: 8,
      currentXP: 1240,
      nextLevelXP: 1500,
      totalXP: 1240,
      color: 'bg-blue-500',
      description: 'Professional development and career growth',
      recentTasks: [
        'Complete project proposal',
        'Attend team meeting',
        'Review code submissions'
      ],
      milestones: [
        { name: 'First Promotion', completed: true },
        { name: 'Lead a Project', completed: true },
        { name: 'Mentor Junior Dev', completed: false }
      ]
    },
    {
      id: 'health',
      name: 'Health & Wellness',
      icon: Heart,
      level: 6,
      currentXP: 890,
      nextLevelXP: 1000,
      totalXP: 890,
      color: 'bg-green-500',
      description: 'Physical and mental well-being',
      recentTasks: [
        'Meditate for 10 minutes',
        'Drink 8 glasses of water',
        'Take vitamins'
      ],
      milestones: [
        { name: 'Daily Meditation', completed: true },
        { name: '30-Day Streak', completed: false },
        { name: 'Stress Management', completed: false }
      ]
    },
    {
      id: 'learning',
      name: 'Learning & Growth',
      icon: BookOpen,
      level: 10,
      currentXP: 1580,
      nextLevelXP: 1800,
      totalXP: 1580,
      color: 'bg-purple-500',
      description: 'Continuous learning and skill development',
      recentTasks: [
        'Read 20 pages of book',
        'Complete online course',
        'Practice new language'
      ],
      milestones: [
        { name: 'Read 12 Books', completed: true },
        { name: 'Complete Certification', completed: true },
        { name: 'Learn New Skill', completed: false }
      ]
    },
    {
      id: 'exercise',
      name: 'Exercise & Fitness',
      icon: Dumbbell,
      level: 4,
      currentXP: 520,
      nextLevelXP: 600,
      totalXP: 520,
      color: 'bg-orange-500',
      description: 'Physical fitness and strength building',
      recentTasks: [
        '30-minute workout',
        'Go for a run',
        'Yoga session'
      ],
      milestones: [
        { name: 'First 5K Run', completed: true },
        { name: 'Gym Consistency', completed: false },
        { name: 'Strength Goals', completed: false }
      ]
    },
    {
      id: 'personal',
      name: 'Personal Life',
      icon: User,
      level: 5,
      currentXP: 650,
      nextLevelXP: 750,
      totalXP: 650,
      color: 'bg-pink-500',
      description: 'Personal relationships and life balance',
      recentTasks: [
        'Call family',
        'Plan weekend activities',
        'Organize living space'
      ],
      milestones: [
        { name: 'Work-Life Balance', completed: false },
        { name: 'Social Connections', completed: true },
        { name: 'Personal Goals', completed: false }
      ]
    }
  ]

  const getProgressPercentage = (current: number, next: number) => {
    const levelStart = next - (next - current)
    return ((current - levelStart) / (next - levelStart)) * 100
  }

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Growth Areas Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {growthAreas.reduce((sum, area) => sum + area.level, 0)}
              </div>
              <p className="text-sm text-muted-foreground">Total Levels</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">
                {growthAreas.reduce((sum, area) => sum + area.totalXP, 0).toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">Total XP</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-1">
                {Math.round(growthAreas.reduce((sum, area) => sum + getProgressPercentage(area.currentXP, area.nextLevelXP), 0) / growthAreas.length)}%
              </div>
              <p className="text-sm text-muted-foreground">Avg Progress</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Growth Areas Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {growthAreas.map((area) => {
          const Icon = area.icon
          const progressPercentage = getProgressPercentage(area.currentXP, area.nextLevelXP)
          
          return (
            <Card key={area.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${area.color} text-white`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{area.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Level {area.level}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* XP Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">XP Progress</span>
                    <span className="text-sm text-muted-foreground">
                      {area.currentXP} / {area.nextLevelXP}
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">
                    {area.nextLevelXP - area.currentXP} XP to level {area.level + 1}
                  </p>
                </div>

                {/* Recent Tasks */}
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Recent Activities
                  </h4>
                  <div className="space-y-1">
                    {area.recentTasks.map((task, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestones */}
                <div>
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    Milestones
                  </h4>
                  <div className="space-y-2">
                    {area.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          milestone.completed 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-muted-foreground'
                        }`}>
                          {milestone.completed && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <span className={`text-sm ${
                          milestone.completed 
                            ? 'text-foreground' 
                            : 'text-muted-foreground'
                        }`}>
                          {milestone.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task to {area.name}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-auto p-4 flex-col gap-2" variant="outline">
              <Target className="w-6 h-6" />
              <div className="text-center">
                <p className="font-medium">Set New Goal</p>
                <p className="text-xs text-muted-foreground">Define growth target</p>
              </div>
            </Button>
            
            <Button className="h-auto p-4 flex-col gap-2" variant="outline">
              <TrendingUp className="w-6 h-6" />
              <div className="text-center">
                <p className="font-medium">Track Progress</p>
                <p className="text-xs text-muted-foreground">Log daily activities</p>
              </div>
            </Button>
            
            <Button className="h-auto p-4 flex-col gap-2" variant="outline">
              <Star className="w-6 h-6" />
              <div className="text-center">
                <p className="font-medium">View Insights</p>
                <p className="text-xs text-muted-foreground">Analyze patterns</p>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default GrowthAreas