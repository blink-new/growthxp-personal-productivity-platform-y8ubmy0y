import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { 
  Settings, 
  Bell, 
  User, 
  Palette, 
  Database,
  Shield,
  Smartphone,
  Clock,
  Target,
  Zap
} from 'lucide-react'

const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    // Profile
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    timezone: 'UTC-5',
    
    // Notifications
    dailyReminders: true,
    taskDeadlines: true,
    achievementAlerts: true,
    weeklyReports: true,
    emailNotifications: false,
    pushNotifications: true,
    reminderTime: '09:00',
    
    // Appearance
    theme: 'light',
    accentColor: 'indigo',
    compactMode: false,
    
    // Productivity
    autoDelegate: true,
    defaultTaskDuration: 30,
    workingHours: { start: '09:00', end: '17:00' },
    weekendMode: false,
    
    // Privacy
    dataSharing: false,
    analytics: true,
    publicProfile: false
  })

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const themes = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'auto', label: 'Auto' }
  ]

  const accentColors = [
    { value: 'indigo', label: 'Indigo', color: 'bg-indigo-500' },
    { value: 'blue', label: 'Blue', color: 'bg-blue-500' },
    { value: 'green', label: 'Green', color: 'bg-green-500' },
    { value: 'purple', label: 'Purple', color: 'bg-purple-500' },
    { value: 'pink', label: 'Pink', color: 'bg-pink-500' },
    { value: 'orange', label: 'Orange', color: 'bg-orange-500' }
  ]

  const timezones = [
    { value: 'UTC-8', label: 'Pacific Time (UTC-8)' },
    { value: 'UTC-7', label: 'Mountain Time (UTC-7)' },
    { value: 'UTC-6', label: 'Central Time (UTC-6)' },
    { value: 'UTC-5', label: 'Eastern Time (UTC-5)' },
    { value: 'UTC+0', label: 'GMT (UTC+0)' },
    { value: 'UTC+1', label: 'Central European Time (UTC+1)' }
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="productivity">Productivity</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <User className="w-4 h-4" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input
                      id="displayName"
                      value={settings.displayName}
                      onChange={(e) => updateSetting('displayName', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={settings.email}
                      onChange={(e) => updateSetting('email', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select value={settings.timezone} onValueChange={(value) => updateSetting('timezone', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {timezones.map(tz => (
                          <SelectItem key={tz.value} value={tz.value}>
                            {tz.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notification Settings */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Bell className="w-4 h-4" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="dailyReminders">Daily Reminders</Label>
                        <p className="text-sm text-muted-foreground">
                          Get reminded about your daily tasks
                        </p>
                      </div>
                      <Switch
                        id="dailyReminders"
                        checked={settings.dailyReminders}
                        onCheckedChange={(checked) => updateSetting('dailyReminders', checked)}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="taskDeadlines">Task Deadlines</Label>
                        <p className="text-sm text-muted-foreground">
                          Notifications for approaching deadlines
                        </p>
                      </div>
                      <Switch
                        id="taskDeadlines"
                        checked={settings.taskDeadlines}
                        onCheckedChange={(checked) => updateSetting('taskDeadlines', checked)}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="achievementAlerts">Achievement Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Celebrate when you unlock achievements
                        </p>
                      </div>
                      <Switch
                        id="achievementAlerts"
                        checked={settings.achievementAlerts}
                        onCheckedChange={(checked) => updateSetting('achievementAlerts', checked)}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="weeklyReports">Weekly Reports</Label>
                        <p className="text-sm text-muted-foreground">
                          Summary of your weekly progress
                        </p>
                      </div>
                      <Switch
                        id="weeklyReports"
                        checked={settings.weeklyReports}
                        onCheckedChange={(checked) => updateSetting('weeklyReports', checked)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Delivery Methods</h4>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        <Label htmlFor="pushNotifications">Push Notifications</Label>
                      </div>
                      <Switch
                        id="pushNotifications"
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) => updateSetting('pushNotifications', checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4" />
                        <Label htmlFor="emailNotifications">Email Notifications</Label>
                      </div>
                      <Switch
                        id="emailNotifications"
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => updateSetting('emailNotifications', checked)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reminderTime">Daily Reminder Time</Label>
                    <Input
                      id="reminderTime"
                      type="time"
                      value={settings.reminderTime}
                      onChange={(e) => updateSetting('reminderTime', e.target.value)}
                      className="w-32"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appearance Settings */}
            <TabsContent value="appearance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Palette className="w-4 h-4" />
                    Appearance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select value={settings.theme} onValueChange={(value) => updateSetting('theme', value)}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {themes.map(theme => (
                          <SelectItem key={theme.value} value={theme.value}>
                            {theme.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="accentColor">Accent Color</Label>
                    <Select value={settings.accentColor} onValueChange={(value) => updateSetting('accentColor', value)}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {accentColors.map(color => (
                          <SelectItem key={color.value} value={color.value}>
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded-full ${color.color}`} />
                              {color.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="compactMode">Compact Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Reduce spacing for more content
                      </p>
                    </div>
                    <Switch
                      id="compactMode"
                      checked={settings.compactMode}
                      onCheckedChange={(checked) => updateSetting('compactMode', checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Productivity Settings */}
            <TabsContent value="productivity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="w-4 h-4" />
                    Productivity Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="autoDelegate">Auto-delegate Tasks</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically move incomplete tasks to tomorrow
                      </p>
                    </div>
                    <Switch
                      id="autoDelegate"
                      checked={settings.autoDelegate}
                      onCheckedChange={(checked) => updateSetting('autoDelegate', checked)}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="defaultTaskDuration">Default Task Duration (minutes)</Label>
                    <Input
                      id="defaultTaskDuration"
                      type="number"
                      value={settings.defaultTaskDuration}
                      onChange={(e) => updateSetting('defaultTaskDuration', parseInt(e.target.value))}
                      className="w-32"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Working Hours</Label>
                    <div className="flex items-center gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="workStart" className="text-sm">Start</Label>
                        <Input
                          id="workStart"
                          type="time"
                          value={settings.workingHours.start}
                          onChange={(e) => updateSetting('workingHours', { 
                            ...settings.workingHours, 
                            start: e.target.value 
                          })}
                          className="w-32"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="workEnd" className="text-sm">End</Label>
                        <Input
                          id="workEnd"
                          type="time"
                          value={settings.workingHours.end}
                          onChange={(e) => updateSetting('workingHours', { 
                            ...settings.workingHours, 
                            end: e.target.value 
                          })}
                          className="w-32"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="weekendMode">Weekend Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Relaxed productivity tracking on weekends
                      </p>
                    </div>
                    <Switch
                      id="weekendMode"
                      checked={settings.weekendMode}
                      onCheckedChange={(checked) => updateSetting('weekendMode', checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Settings */}
            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="w-4 h-4" />
                    Privacy & Data
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="dataSharing">Data Sharing</Label>
                      <p className="text-sm text-muted-foreground">
                        Share anonymized data to improve the platform
                      </p>
                    </div>
                    <Switch
                      id="dataSharing"
                      checked={settings.dataSharing}
                      onCheckedChange={(checked) => updateSetting('dataSharing', checked)}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="analytics">Analytics</Label>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how you use the app
                      </p>
                    </div>
                    <Switch
                      id="analytics"
                      checked={settings.analytics}
                      onCheckedChange={(checked) => updateSetting('analytics', checked)}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="publicProfile">Public Profile</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow others to see your achievements
                      </p>
                    </div>
                    <Switch
                      id="publicProfile"
                      checked={settings.publicProfile}
                      onCheckedChange={(checked) => updateSetting('publicProfile', checked)}
                    />
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <Button variant="outline" className="w-full">
                      <Database className="w-4 h-4 mr-2" />
                      Export My Data
                    </Button>
                    <Button variant="destructive" className="w-full">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default SettingsPanel