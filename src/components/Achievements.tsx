import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Trophy, 
  Star, 
  Flame, 
  Target, 
  Zap, 
  Calendar,
  Award,
  Crown,
  Medal,
  Lock
} from 'lucide-react'

interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  category: 'streak' | 'milestone' | 'special' | 'level'
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  unlocked: boolean
  unlockedAt?: string
  progress?: number
  maxProgress?: number
  xpReward: number
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      id: '1',
      name: 'First Steps',
      description: 'Complete your first task',
      icon: '👶',
      category: 'milestone',
      rarity: 'common',
      unlocked: true,
      unlockedAt: '2024-01-15',
      xpReward: 10
    },
    {
      id: '2',
      name: 'Week Warrior',
      description: 'Maintain a 7-day streak',
      icon: '🔥',
      category: 'streak',
      rarity: 'rare',
      unlocked: true,
      unlockedAt: '2024-01-22',
      xpReward: 50
    },
    {
      id: '3',
      name: 'Learning Master',
      description: 'Reach level 10 in Learning',
      icon: '📚',
      category: 'level',
      rarity: 'epic',
      unlocked: true,
      unlockedAt: '2024-01-25',
      xpReward: 100
    },
    {
      id: '4',
      name: 'Task Crusher',
      description: 'Complete 50 tasks',
      icon: '⚡',
      category: 'milestone',
      rarity: 'rare',
      unlocked: true,
      unlockedAt: '2024-01-20',
      xpReward: 75
    },
    {
      id: '5',
      name: 'Consistency King',
      description: 'Maintain a 30-day streak',
      icon: '👑',
      category: 'streak',
      rarity: 'legendary',
      unlocked: false,
      progress: 7,
      maxProgress: 30,
      xpReward: 200
    },
    {
      id: '6',
      name: 'XP Collector',
      description: 'Earn 5000 total XP',
      icon: '💎',
      category: 'milestone',
      rarity: 'epic',
      unlocked: false,
      progress: 2847,
      maxProgress: 5000,
      xpReward: 150
    },
    {
      id: '7',
      name: 'All-Rounder',
      description: 'Reach level 5 in all growth areas',
      icon: '🌟',
      category: 'special',
      rarity: 'legendary',
      unlocked: false,
      progress: 4,
      maxProgress: 5,
      xpReward: 300
    },
    {
      id: '8',
      name: 'Early Bird',
      description: 'Complete tasks before 8 AM for 7 days',
      icon: '🌅',
      category: 'special',
      rarity: 'rare',
      unlocked: false,
      progress: 3,
      maxProgress: 7,
      xpReward: 80
    }
  ]

  const rarityColors = {
    common: 'bg-gray-500',
    rare: 'bg-blue-500',
    epic: 'bg-purple-500',
    legendary: 'bg-yellow-500'
  }

  const rarityBorders = {
    common: 'border-gray-200',
    rare: 'border-blue-200',
    epic: 'border-purple-200',
    legendary: 'border-yellow-200'
  }

  const categoryIcons = {
    streak: Flame,
    milestone: Target,
    special: Star,
    level: Crown
  }

  const unlockedAchievements = achievements.filter(a => a.unlocked)
  const lockedAchievements = achievements.filter(a => !a.unlocked)
  const totalXPFromAchievements = unlockedAchievements.reduce((sum, a) => sum + a.xpReward, 0)

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-accent" />
              <div>
                <p className="text-2xl font-bold text-accent">{unlockedAchievements.length}</p>
                <p className="text-sm text-muted-foreground">Unlocked</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-2xl font-bold">{lockedAchievements.length}</p>
                <p className="text-sm text-muted-foreground">Locked</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold text-primary">{totalXPFromAchievements}</p>
                <p className="text-sm text-muted-foreground">Bonus XP</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Medal className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold text-green-500">
                  {Math.round((unlockedAchievements.length / achievements.length) * 100)}%
                </p>
                <p className="text-sm text-muted-foreground">Complete</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recently Unlocked */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            Recently Unlocked
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {unlockedAchievements.slice(-3).reverse().map((achievement) => {
              const CategoryIcon = categoryIcons[achievement.category]
              
              return (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 ${rarityBorders[achievement.rarity]} bg-gradient-to-br from-background to-muted/20 relative overflow-hidden`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{achievement.name}</h3>
                        <Badge className={`${rarityColors[achievement.rarity]} text-white text-xs`}>
                          {achievement.rarity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {achievement.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <CategoryIcon className="w-3 h-3" />
                          <span className="text-xs text-muted-foreground capitalize">
                            {achievement.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="w-3 h-3 text-primary" />
                          <span className="text-xs font-medium text-primary">
                            +{achievement.xpReward} XP
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <Award className="w-4 h-4 text-accent" />
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* All Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            All Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => {
              const CategoryIcon = categoryIcons[achievement.category]
              const isLocked = !achievement.unlocked
              
              return (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isLocked 
                      ? 'border-muted bg-muted/20 opacity-60' 
                      : `${rarityBorders[achievement.rarity]} bg-gradient-to-br from-background to-muted/20 hover:shadow-md`
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`text-3xl ${isLocked ? 'grayscale' : ''}`}>
                      {isLocked ? '🔒' : achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-semibold ${isLocked ? 'text-muted-foreground' : ''}`}>
                          {achievement.name}
                        </h3>
                        <Badge 
                          className={`text-white text-xs ${
                            isLocked ? 'bg-muted-foreground' : rarityColors[achievement.rarity]
                          }`}
                        >
                          {achievement.rarity}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {achievement.description}
                      </p>

                      {/* Progress Bar for Locked Achievements */}
                      {isLocked && achievement.progress !== undefined && achievement.maxProgress && (
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground">Progress</span>
                            <span className="text-xs text-muted-foreground">
                              {achievement.progress}/{achievement.maxProgress}
                            </span>
                          </div>
                          <Progress 
                            value={(achievement.progress / achievement.maxProgress) * 100} 
                            className="h-2"
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <CategoryIcon className="w-3 h-3" />
                          <span className="text-xs text-muted-foreground capitalize">
                            {achievement.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="w-3 h-3 text-primary" />
                          <span className="text-xs font-medium text-primary">
                            +{achievement.xpReward} XP
                          </span>
                        </div>
                      </div>

                      {achievement.unlockedAt && (
                        <div className="flex items-center gap-1 mt-2">
                          <Calendar className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Achievements