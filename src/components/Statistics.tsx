import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { 
  TrendingUp, 
  Calendar, 
  Zap, 
  Target,
  Activity,
  Clock
} from 'lucide-react'

const Statistics = () => {
  // Mock data for charts
  const weeklyXP = [
    { day: 'Mon', xp: 85, tasks: 6 },
    { day: 'Tue', xp: 120, tasks: 8 },
    { day: 'Wed', xp: 95, tasks: 7 },
    { day: 'Thu', xp: 140, tasks: 9 },
    { day: 'Fri', xp: 110, tasks: 8 },
    { day: 'Sat', xp: 75, tasks: 5 },
    { day: 'Sun', xp: 90, tasks: 6 }
  ]

  const monthlyProgress = [
    { week: 'Week 1', xp: 650, tasks: 45 },
    { week: 'Week 2', xp: 720, tasks: 52 },
    { week: 'Week 3', xp: 680, tasks: 48 },
    { week: 'Week 4', xp: 715, tasks: 50 }
  ]

  const categoryDistribution = [
    { name: 'Work', value: 35, color: '#3B82F6' },
    { name: 'Health', value: 25, color: '#10B981' },
    { name: 'Learning', value: 20, color: '#8B5CF6' },
    { name: 'Exercise', value: 15, color: '#F59E0B' },
    { name: 'Personal', value: 5, color: '#EC4899' }
  ]

  const heatmapData = Array.from({ length: 365 }, (_, i) => ({
    date: new Date(2024, 0, i + 1),
    value: Math.floor(Math.random() * 4)
  }))

  const stats = {
    totalTasks: 247,
    completionRate: 87,
    averageXP: 95,
    longestStreak: 12,
    currentStreak: 7,
    totalHours: 124
  }

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <div>
                <p className="text-lg font-bold">{stats.totalTasks}</p>
                <p className="text-xs text-muted-foreground">Total Tasks</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <div>
                <p className="text-lg font-bold text-green-500">{stats.completionRate}%</p>
                <p className="text-xs text-muted-foreground">Completion</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <div>
                <p className="text-lg font-bold text-primary">{stats.averageXP}</p>
                <p className="text-xs text-muted-foreground">Avg XP/Day</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-orange-500" />
              <div>
                <p className="text-lg font-bold text-orange-500">{stats.longestStreak}</p>
                <p className="text-xs text-muted-foreground">Best Streak</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-accent" />
              <div>
                <p className="text-lg font-bold text-accent">{stats.currentStreak}</p>
                <p className="text-xs text-muted-foreground">Current</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-500" />
              <div>
                <p className="text-lg font-bold text-purple-500">{stats.totalHours}h</p>
                <p className="text-xs text-muted-foreground">Total Time</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Time Period Tabs */}
      <Tabs defaultValue="weekly" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-6">
          {/* Weekly XP Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="w-5 h-5" />
                Weekly XP Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyXP}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="xp" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Tasks Completed Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Tasks Completed This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyXP}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="tasks" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Monthly Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyProgress}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="xp" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="daily" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Activity Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-53 gap-1">
                {heatmapData.slice(0, 371).map((day, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-sm ${
                      day.value === 0 ? 'bg-muted' :
                      day.value === 1 ? 'bg-primary/25' :
                      day.value === 2 ? 'bg-primary/50' :
                      day.value === 3 ? 'bg-primary/75' :
                      'bg-primary'
                    }`}
                    title={`${day.date.toDateString()}: ${day.value} tasks`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-muted rounded-sm" />
                  <div className="w-3 h-3 bg-primary/25 rounded-sm" />
                  <div className="w-3 h-3 bg-primary/50 rounded-sm" />
                  <div className="w-3 h-3 bg-primary/75 rounded-sm" />
                  <div className="w-3 h-3 bg-primary rounded-sm" />
                </div>
                <span>More</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="yearly" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Yearly Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Yearly statistics will be available after one year of usage</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Category Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Task Distribution by Category
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="space-y-3">
              {categoryDistribution.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <Badge variant="secondary">
                    {category.value}%
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Statistics