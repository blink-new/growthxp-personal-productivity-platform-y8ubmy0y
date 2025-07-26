import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Plus, 
  Calendar, 
  Clock, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Circle,
  MoreHorizontal
} from 'lucide-react'

interface Task {
  id: string
  title: string
  category: string
  xp: number
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  estimatedTime: number
}

const DailyTasks = () => {
  const [newTask, setNewTask] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('work')
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete project proposal',
      category: 'work',
      xp: 25,
      completed: false,
      priority: 'high',
      estimatedTime: 60
    },
    {
      id: '2',
      title: '30-minute morning workout',
      category: 'exercise',
      xp: 20,
      completed: true,
      priority: 'medium',
      estimatedTime: 30
    },
    {
      id: '3',
      title: 'Read 20 pages of book',
      category: 'learning',
      xp: 15,
      completed: false,
      priority: 'medium',
      estimatedTime: 25
    },
    {
      id: '4',
      title: 'Meditate for 10 minutes',
      category: 'health',
      xp: 10,
      completed: true,
      priority: 'low',
      estimatedTime: 10
    }
  ])

  const categories = [
    { value: 'work', label: 'Work', color: 'bg-blue-500' },
    { value: 'health', label: 'Health', color: 'bg-green-500' },
    { value: 'learning', label: 'Learning', color: 'bg-purple-500' },
    { value: 'exercise', label: 'Exercise', color: 'bg-orange-500' },
    { value: 'personal', label: 'Personal', color: 'bg-pink-500' }
  ]

  const priorityColors = {
    low: 'bg-gray-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500'
  }

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ))
  }

  const addTask = () => {
    if (!newTask.trim()) return
    
    const task: Task = {
      id: Date.now().toString(),
      title: newTask,
      category: selectedCategory,
      xp: Math.floor(Math.random() * 20) + 10, // Random XP between 10-30
      completed: false,
      priority: 'medium',
      estimatedTime: 30
    }
    
    setTasks([...tasks, task])
    setNewTask('')
  }

  const completedTasks = tasks.filter(task => task.completed)
  const pendingTasks = tasks.filter(task => !task.completed)
  const totalXP = completedTasks.reduce((sum, task) => sum + task.xp, 0)

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold">{completedTasks.length}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Circle className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-2xl font-bold">{pendingTasks.length}</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold text-primary">{totalXP}</p>
                <p className="text-sm text-muted-foreground">XP Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <div>
                <p className="text-2xl font-bold text-accent">
                  {Math.round(completedTasks.reduce((sum, task) => sum + task.estimatedTime, 0) / 60 * 10) / 10}h
                </p>
                <p className="text-sm text-muted-foreground">Time Spent</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add New Task */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add New Task
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              placeholder="What do you want to accomplish?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              className="flex-1"
            />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${category.color}`} />
                      {category.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={addTask} className="px-6">
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Today's Tasks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Today's Tasks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tasks.map((task) => {
              const category = categories.find(cat => cat.value === task.category)
              
              return (
                <div
                  key={task.id}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                    task.completed 
                      ? 'bg-muted/50 opacity-75' 
                      : 'bg-card hover:shadow-sm'
                  }`}
                >
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`font-medium ${
                        task.completed ? 'line-through text-muted-foreground' : ''
                      }`}>
                        {task.title}
                      </h3>
                      <div className={`w-2 h-2 rounded-full ${category?.color}`} />
                      <Badge variant="secondary" className="text-xs">
                        {category?.label}
                      </Badge>
                      <div className={`w-2 h-2 rounded-full ${priorityColors[task.priority]}`} />
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {task.xp} XP
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {task.estimatedTime}min
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Tomorrow Planning */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5" />
            Plan Tomorrow
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="mb-4">No tasks planned for tomorrow yet</p>
            <Button variant="outline">
              Add Tomorrow's Tasks
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default DailyTasks