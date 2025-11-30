
import React, { useState, useEffect } from 'react';
import { 
    // Essentials
    NeuButton, NeuIconButton, NeuCard, NeuTooltip, NeuSkeleton,
    // Forms
    NeuInput, NeuSearchBar, NeuTextarea, NeuSelect, NeuCombobox, NeuCheckbox, NeuRadioGroup, NeuToggle, NeuSlider, NeuTagInput, NeuFileUpload, NeuRating,
    // Navigation
    NeuTab, NeuAccordion, NeuBreadcrumb, NeuPagination, NeuSheet, NeuTreeView, NeuStepper,
    // Data
    NeuTable, NeuAvatar, NeuAvatarGroup, NeuBadge, NeuProgressCircle, NeuMetricCard, NeuTimeline, NeuCalendar, NeuCodeSnippet, NeuKeycap, NeuPricingCard,
    // Overlays
    NeuDialog, NeuConfirmDialog, NeuAlert, NeuToast, NeuDropdown, NeuCommandPalette,
    // Comm & Utils
    NeuOTPInput, NeuChatBubble, NeuEmptyState, NeuSpinner, NeuDivider,
    // SaaS Widgets
    NeuCreditCard, NeuPricingToggle, NeuTaskItem, NeuKanbanColumn, NeuUserCard, NeuActivityItem, NeuReviewCard, NeuColorPicker, NeuFilterGroup, NeuCookieConsent,
    // Task Manager
    NeuProjectItem, NeuPriorityFlag, NeuDateBadge, NeuInlineEdit, NeuAddButton, NeuComment, NeuTaskListHeader,
    // Productivity
    NeuSubtaskItem, NeuSectionHeader, NeuFilterPill, NeuReminder, NeuProductivityChart,
    // Advanced Productivity
    NeuQuickAdd, NeuLabelPicker, NeuBoardCard, NeuStatsRing, NeuRecurringDate,
    // Meeting Management
    NeuRoomCard, NeuServicePicker, NeuVisitorBadge, NeuKioskButton, NeuRoomStatusPanel, NeuBookingTimeline,
    NeuMeetingInvite, NeuVisitorLogItem, NeuCateringCartItem, NeuSafetyInduction, NeuFeedbackForm,
    // Meeting Insights & Maps
    NeuFloorPlan, NeuAmenitySelector, NeuInsightChart, NeuAgendaItem, NeuCapacityGauge,
    // Facility Operations
    NeuWayfindingArrow, NeuCateringMenu, NeuDeskSelector, NeuQrScanner, NeuDeviceMonitor,
    // Meeting SaaS Expansion
    NeuRecurringBooking, NeuResourceList, NeuVisitorNotification, NeuServiceLog, NeuRoomLayoutPicker, 
    NeuMeetingTimer, NeuOccupancyHeatmap, NeuPrintBadgeButton, NeuGuestForm, NeuDashboardWidget
} from './components';

import { 
  Menu, Sun, Moon, Search, Bell, Home, User, Settings, 
  Activity, Heart, Star, Share2, DollarSign, Users, 
  TrendingUp, Box, CheckCircle, AlertTriangle, Command, Layers,
  Layout, Type, Database, CreditCard, MoreVertical, Trash, Edit, Mail,
  MessageCircle, Shield, Inbox, Loader, Zap, GitCommit, Calendar as CalendarIcon, Hash, List, Flame, Repeat, Tag, Clock, Globe, Coffee, Monitor, LogIn, 
  Projector, Video, Mic, PenTool, Wifi
} from 'lucide-react';

// Documentation Section Configuration
const DOC_SECTIONS = [
    {
        category: "Essentials",
        items: [
            { id: "buttons", label: "Button" },
            { id: "cards", label: "Card" },
            { id: "tooltips", label: "Tooltip" },
        ]
    },
    {
        category: "Meeting Management",
        items: [
             { id: "mm-rooms", label: "Room Booking" },
             { id: "mm-invites", label: "Invites & Visitors" }, // Updated
             { id: "mm-services", label: "Services & Catering" }, // Updated
             { id: "mm-visitor", label: "Visitor Kiosk" },
             { id: "mm-signage", label: "Digital Signage" },
             { id: "mm-insights", label: "Insights & Maps" },
             { id: "mm-facility", label: "Facility Ops" },
             { id: "mm-adv", label: "Advanced Tools" }, // New
        ]
    },
    {
        category: "Task Manager",
        items: [
             { id: "todo-projects", label: "Projects & Navigation" },
             { id: "todo-tasks", label: "Task List & Sections" },
             { id: "todo-details", label: "Details & Comments" },
             { id: "todo-productivity", label: "Productivity & Filters" },
        ]
    },
    {
        category: "Advanced Productivity",
        items: [
             { id: "adv-quickadd", label: "Quick Add & Input" },
             { id: "adv-board", label: "Board & Labels" },
             { id: "adv-stats", label: "Stats & Analytics" },
        ]
    },
    {
        category: "Forms & Inputs",
        items: [
            { id: "inputs", label: "Input & Search" },
            { id: "selects", label: "Select & Combobox" },
            { id: "checkboxes", label: "Checkbox & Radio" },
            { id: "toggles", label: "Toggle & Slider" },
            { id: "tag-input", label: "Tag Input" },
            { id: "file-upload", label: "File Upload" },
        ]
    },
    {
        category: "Data Display",
        items: [
            { id: "metric-cards", label: "Metric Card" },
            { id: "tables", label: "Table" },
            { id: "timelines", label: "Timeline" },
            { id: "calendars", label: "Calendar" },
            { id: "avatars", label: "Avatar & Badges" },
        ]
    },
    {
        category: "Navigation",
        items: [
            { id: "tabs", label: "Tabs & Accordion" },
            { id: "breadcrumbs", label: "Breadcrumb & Pagination" },
            { id: "steppers", label: "Stepper" },
            { id: "sheets", label: "Sheet / Drawer" },
            { id: "tree-view", label: "Tree View" },
        ]
    },
    {
        category: "Feedback & Overlays",
        items: [
            { id: "alerts", label: "Alert" },
            { id: "dialogs", label: "Dialog & Modal" },
            { id: "dropdowns", label: "Dropdown & Toast" },
        ]
    },
    {
        category: "Pro / SaaS",
        items: [
            { id: "command-palette", label: "Command Palette" },
            { id: "pricing", label: "Pricing Card" },
            { id: "code", label: "Code Snippet" },
            { id: "keycaps", label: "Keycap" },
        ]
    },
    {
        category: "Communication",
        items: [
            { id: "otp", label: "OTP Input" },
            { id: "chat", label: "Chat Bubble" },
            { id: "empty-state", label: "Empty State" },
        ]
    },
    {
        category: "SaaS Widgets",
        items: [
            { id: "billing", label: "Billing & Plans" },
            { id: "kanban", label: "Tasks & Kanban" },
            { id: "social", label: "Social & Reviews" },
            { id: "widgets-misc", label: "Filters & Pickers" },
        ]
    }
];

const App = () => {
  const [themeMode, setThemeMode] = useState('system');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('buttons');

  // Interactive States
  const [toggleState, setToggleState] = useState(true);
  const [sliderVal, setSliderVal] = useState(65);
  const [tab, setTab] = useState('1');
  const [date, setDate] = useState(new Date());
  
  // Dialog & Overlay States
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isCookieOpen, setIsCookieOpen] = useState(true);
  
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: '', type: 'info' as any });
  const [tags, setTags] = useState(['React', 'UI', 'Neumorphism']);
  const [rating, setRating] = useState(4);
  const [currentStep, setCurrentStep] = useState(1);
  const [checkboxState, setCheckboxState] = useState(true);
  const [radioVal, setRadioVal] = useState('2');
  const [selectVal, setSelectVal] = useState('');
  const [comboVal, setComboVal] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchVal, setSearchVal] = useState('');

  // New SaaS Component States
  const [isYearly, setIsYearly] = useState(false);
  const [tasks, setTasks] = useState({ '1': false, '2': true, '3': false });
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#6C63FF');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Task Manager States
  const [activeProject, setActiveProject] = useState('Inbox');
  const [taskPriority, setTaskPriority] = useState<1|2|3|4>(2);
  const [taskName, setTaskName] = useState('Redesign Landing Page');

  // Productivity States
  const [filter, setFilter] = useState('all');
  const [reminderActive, setReminderActive] = useState(true);

  // Advanced Productivity States
  const [selectedLabels, setSelectedLabels] = useState<string[]>(['1']);
  const [recurrence, setRecurrence] = useState('weekly');

  // Meeting Management States
  const [coffeeCount, setCoffeeCount] = useState(2);
  const [lunchCount, setLunchCount] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(['wifi', 'tv']);
  const [selectedDesk, setSelectedDesk] = useState<string>('');
  const [inviteStatus, setInviteStatus] = useState<'pending'|'accepted'|'declined'>('pending');
  const [isSafetyAgreed, setIsSafetyAgreed] = useState(false);
  const [cateringCart, setCateringCart] = useState([
      {id: '1', name: 'Croissants', price: '$12', quantity: 2, notes: ''}
  ]);
  
  // Meeting SaaS Expansion States
  const [recurrenceFreq, setRecurrenceFreq] = useState<'daily'|'weekly'|'monthly'>('weekly');
  const [recurrenceDays, setRecurrenceDays] = useState<string[]>(['Mon', 'Wed', 'Fri']);
  const [selectedLayout, setSelectedLayout] = useState('boardroom');
  const [guestList, setGuestList] = useState<{id: string, name: string, email: string}[]>([
      {id: '1', name: 'Elon Musk', email: 'elon@spacex.com'}
  ]);
  const [resourceStatuses, setResourceStatuses] = useState<any>({
      'r1': 'working', 'r2': 'broken'
  });

  // Theme Logic
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    setThemeMode(localTheme || 'system');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === 'dark') {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else if (themeMode === 'light') {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.removeItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', systemDark ? 'dark' : 'light');
    }
  }, [themeMode]);

  const toggleTheme = () => setThemeMode(prev => prev === 'dark' ? 'light' : 'dark');
  const showToast = (msg: string, type: any = 'info') => setToast({ show: true, msg, type });

  const scrollToSection = (id: string) => {
      setActiveSection(id);
      const el = document.getElementById(id);
      if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setMobileMenuOpen(false);
      }
  };

  const handleSaveAttempt = () => {
      // Don't close the main dialog yet, open confirmation
      setIsConfirmOpen(true);
  };

  const handleSaveConfirm = () => {
      setIsConfirmOpen(false);
      setIsDialogOpen(false);
      showToast('Account changes saved successfully!', 'success');
  };

  const toggleTask = (id: string) => setTasks(prev => ({...prev, [id]: !prev[id as keyof typeof prev]}));

  return (
    <div className="min-h-screen bg-neu-base text-neu-text font-sans transition-colors duration-300">
      
      {/* Global Overlays */}
      <NeuToast isVisible={toast.show} message={toast.msg} type={toast.type} onClose={() => setToast({...toast, show: false})} />
      
      <NeuCookieConsent 
        isOpen={isCookieOpen} 
        onAccept={() => {setIsCookieOpen(false); showToast("Cookies Accepted", "success")}} 
        onDecline={() => setIsCookieOpen(false)}
      />

      <NeuCommandPalette isOpen={isCmdOpen} onClose={() => setIsCmdOpen(false)} items={[
          { id: '1', label: 'Docs: Buttons', icon: <Box size={18}/>, onClick: () => scrollToSection('buttons') },
          { id: '2', label: 'Docs: Forms', icon: <Type size={18}/>, onClick: () => scrollToSection('inputs') },
          { id: '3', label: 'Toggle Theme', icon: <Moon size={18}/>, onClick: toggleTheme },
      ]} />
      
      {/* Main Settings Dialog */}
      <NeuDialog 
          isOpen={isDialogOpen} 
          onClose={() => setIsDialogOpen(false)} 
          title="Account Settings"
          footer={
              <>
                  <NeuButton onClick={() => setIsDialogOpen(false)}>Cancel</NeuButton>
                  <NeuButton variant="accent" onClick={handleSaveAttempt}>Save Changes</NeuButton>
              </>
          }
      >
          <p>This is a neumorphic modal dialog. It sits above the content with a backdrop blur.</p>
          <div className="mt-4">
              <NeuInput label="Display Name" placeholder="John Doe" />
          </div>
      </NeuDialog>

      {/* Confirmation Dialog (Stacks on top) */}
      <NeuConfirmDialog 
          isOpen={isConfirmOpen}
          onClose={() => setIsConfirmOpen(false)}
          onConfirm={handleSaveConfirm}
          title="Confirm Changes"
          description="Are you sure you want to save these changes? This action cannot be undone."
          confirmText="Yes, Save"
          variant="accent"
      />

      <NeuSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} title="Notification Drawer">
          <div className="space-y-4">
              <NeuAlert variant="info" title="New Message">You have received a new message from the team.</NeuAlert>
              <NeuAlert variant="success" title="Update">System update completed successfully.</NeuAlert>
              <NeuAlert variant="warning" title="Storage">Your storage is 80% full.</NeuAlert>
          </div>
      </NeuSheet>

      
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-neu-base/90 backdrop-blur-md shadow-neu-flat border-b border-white/20 h-16 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4">
              <button className="lg:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(true)}>
                  <Menu />
              </button>
              <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-neu-accent shadow-neu-convex flex items-center justify-center text-white">
                      <Layout size={20} />
                  </div>
                  <h1 className="text-xl font-bold tracking-tight text-gray-700">NeuUI<span className="text-neu-accent">.Kit</span></h1>
              </div>
          </div>
          
          <div className="flex items-center gap-4">
               {/* Search Bar */}
               <div className="hidden md:block w-64">
                   <NeuSearchBar 
                        placeholder="Search components..." 
                        onClick={() => setIsCmdOpen(true)}
                        readOnly // Makes it act like a trigger
                        className="cursor-pointer"
                   />
               </div>
               
               <NeuTooltip content="Toggle Theme">
                   <NeuIconButton size="sm" onClick={toggleTheme} className="text-gray-600">
                        {themeMode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                   </NeuIconButton>
               </NeuTooltip>
               <NeuButton size="sm" variant="accent" onClick={() => window.open('https://github.com', '_blank')}>
                    Download Kit
               </NeuButton>
          </div>
      </header>

      <div className="pt-16 flex min-h-screen">
          
          {/* Sidebar (Desktop) */}
          <aside className="hidden lg:block w-64 fixed inset-y-0 top-16 bg-neu-base border-r border-white/20 overflow-y-auto p-6 pb-20 custom-scrollbar">
              <div className="space-y-8">
                  {DOC_SECTIONS.map((section, idx) => (
                      <div key={idx}>
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{section.category}</h4>
                          <div className="space-y-1">
                              {section.items.map(item => (
                                  <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`
                                        w-full text-left px-4 py-2 rounded-lg text-sm font-semibold transition-all
                                        ${activeSection === item.id 
                                            ? 'bg-neu-base shadow-neu-pressed text-neu-accent' 
                                            : 'text-gray-600 hover:bg-white/40 hover:text-gray-800'}
                                    `}
                                  >
                                      {item.label}
                                  </button>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </aside>

          {/* Mobile Navigation Sheet */}
          <NeuSheet isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} position="left" title="Components">
              <div className="space-y-6">
                  {DOC_SECTIONS.map((section, idx) => (
                      <div key={idx}>
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{section.category}</h4>
                          <div className="space-y-2">
                              {section.items.map(item => (
                                  <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="w-full text-left px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-neu-accent hover:bg-white/50"
                                  >
                                      {item.label}
                                  </button>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </NeuSheet>

          {/* Main Content Area */}
          <main className="flex-1 lg:ml-64 p-6 md:p-12 max-w-7xl mx-auto space-y-20 pb-40">
              
              {/* Introduction */}
              <div className="space-y-6 mb-20">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                      Build beautiful SaaS <br />
                      with <span className="text-neu-accent">Soft UI</span> physics.
                  </h2>
                  <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                      A complete, deployable React component library featuring high-fidelity neumorphic styling.
                      Designed for modern dashboards, inclusive of dark mode and smooth interactions.
                  </p>
                  <div className="flex gap-4">
                      <NeuButton size="lg" variant="primary" onClick={() => scrollToSection('buttons')}>Get Started</NeuButton>
                      <NeuButton size="lg" variant="secondary" icon={<Command size={18}/>} onClick={() => setIsCmdOpen(true)}>Docs</NeuButton>
                  </div>
              </div>

              {/* --- COMPONENT SHOWCASES --- */}

              {/* SECTION: BUTTONS */}
              <section id="buttons" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Buttons</h3>
                      <p className="text-gray-500">Interactive elements with varying convexity and pressed states.</p>
                  </div>
                  <NeuCard>
                      <div className="flex flex-wrap gap-4 items-center">
                          <NeuButton>Default</NeuButton>
                          <NeuButton variant="accent">Accent</NeuButton>
                          <NeuButton variant="success" icon={<CheckCircle size={16}/>}>Success</NeuButton>
                          <NeuButton variant="danger" icon={<AlertTriangle size={16}/>}>Danger</NeuButton>
                          <NeuButton disabled>Disabled</NeuButton>
                          <NeuButton variant="warning">Badge</NeuButton>
                      </div>
                      <div className="flex flex-wrap gap-4 items-center mt-6">
                          <NeuIconButton icon={<Heart size={20} />} />
                          <NeuIconButton icon={<Star size={20} />} isActive className="text-yellow-400" />
                          <NeuIconButton icon={<Share2 size={20} />} size="lg" />
                      </div>
                  </NeuCard>
              </section>

              {/* SECTION: CARDS */}
              <section id="cards" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Cards</h3>
                      <p className="text-gray-500">Containers with soft convex shadows and optional actions.</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                      <NeuCard title="Basic Card" subtitle="Standard content container">
                          <p className="text-gray-600">This is a standard card component used for grouping content.</p>
                      </NeuCard>
                      <NeuCard title="Interactive" action={<NeuButton size="sm">Action</NeuButton>}>
                          <p className="text-gray-600">Cards can have header actions and complex children.</p>
                      </NeuCard>
                  </div>
              </section>

              {/* SECTION: TOOLTIPS */}
              <section id="tooltips" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Tooltips</h3>
                  </div>
                  <NeuCard>
                      <div className="flex gap-4 justify-center">
                          <NeuTooltip content="Top Tooltip" position="top"><NeuButton>Hover Me (Top)</NeuButton></NeuTooltip>
                          <NeuTooltip content="Bottom Tooltip" position="bottom"><NeuButton>Hover Me (Bottom)</NeuButton></NeuTooltip>
                          <NeuTooltip content="Right Tooltip" position="right"><NeuButton>Hover Me (Right)</NeuButton></NeuTooltip>
                      </div>
                  </NeuCard>
              </section>

              {/* --- MEETING MANAGEMENT SECTIONS --- */}

              {/* SECTION: ROOMS */}
              <section id="mm-rooms" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Room Booking Dashboard</h3>
                      <p className="text-gray-500">Visualizing room availability and timelines.</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <NeuRoomCard 
                          name="Glass Conference Room" 
                          capacity={12} 
                          status="available" 
                          equipment={['tv', 'wifi', 'power']}
                          onBook={() => showToast('Booking started')}
                      />
                      <NeuRoomCard 
                          name="Focus Studio A" 
                          capacity={4} 
                          status="busy" 
                          nextMeeting={{time: '14:00', subject: 'Q3 Product Sync'}}
                          equipment={['wifi']}
                      />
                      <NeuRoomCard 
                          name="Boardroom" 
                          capacity={20} 
                          status="cleaning" 
                          equipment={['tv', 'wifi']}
                      />
                  </div>
                  <NeuCard>
                      <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Schedule Timeline</h5>
                      <NeuBookingTimeline 
                          startTime="08:00" 
                          endTime="18:00" 
                          bookings={[
                              {start: '09:00', end: '10:30', title: 'Daily Standup'},
                              {start: '13:00', end: '14:00', title: 'Lunch & Learn'},
                              {start: '15:30', end: '17:00', title: 'Client Workshop'}
                          ]}
                      />
                  </NeuCard>
              </section>

              {/* SECTION: INVITES & VISITORS (NEW) */}
              <section id="mm-invites" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Invites & Visitor Log</h3>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div className="space-y-6">
                           <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Incoming Invite</h5>
                           <NeuMeetingInvite 
                                title="Project Kickoff: Redesign"
                                organizer="Sarah Miller"
                                time="Mon, Oct 24 • 10:00 AM - 11:30 AM"
                                location="Glass Conference Room"
                                status={inviteStatus}
                                onResponse={setInviteStatus}
                           />
                      </div>
                      <div className="space-y-4">
                           <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Reception View</h5>
                           <NeuVisitorLogItem 
                                visitorName="James Cameron"
                                company="Lightstorm"
                                host="Sarah M."
                                checkInTime="09:15 AM"
                                onSignOut={() => showToast('Signed out successfully')}
                           />
                           <NeuVisitorLogItem 
                                visitorName="Ellen Ripley"
                                company="Weyland-Yutani"
                                host="Carter B."
                                checkInTime="08:45 AM"
                                isSignedOut
                           />
                      </div>
                  </div>
              </section>

              {/* SECTION: SERVICES & CATERING (UPDATED) */}
              <section id="mm-services" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Services & Catering Order</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                          <NeuServicePicker 
                              id="coffee" 
                              name="Premium Coffee" 
                              description="Freshly brewed artisan blend" 
                              price="$4.50 / pot"
                              icon={<Coffee size={24}/>}
                              quantity={coffeeCount}
                              onChange={setCoffeeCount}
                          />
                          <NeuServicePicker 
                              id="lunch" 
                              name="Boxed Lunch" 
                              description="Assorted sandwiches and salad" 
                              price="$12.00 / pp"
                              quantity={lunchCount}
                              onChange={setLunchCount}
                          />
                      </div>
                      <NeuCard>
                          <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Cart Summary</h5>
                          <div className="space-y-3">
                              {cateringCart.map(item => (
                                  <NeuCateringCartItem 
                                    key={item.id}
                                    {...item} 
                                    onUpdateQuantity={(q) => setCateringCart(prev => prev.map(i => i.id === item.id ? {...i, quantity: q} : i))}
                                    onRemove={() => setCateringCart(prev => prev.filter(i => i.id !== item.id))}
                                  />
                              ))}
                              {cateringCart.length === 0 && <p className="text-gray-400 italic text-center py-4">Cart is empty</p>}
                          </div>
                          <div className="mt-6 pt-4 border-t border-gray-300/30 flex justify-between items-center">
                              <span className="font-bold text-gray-600">Total</span>
                              <span className="font-extrabold text-xl text-gray-800">$24.00</span>
                          </div>
                      </NeuCard>
                  </div>
              </section>

              {/* SECTION: VISITOR & KIOSK */}
              <section id="mm-visitor" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Visitor Kiosk</h3>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="flex flex-col gap-6 justify-center">
                          <NeuVisitorBadge 
                              visitorName="Sarah Connor" 
                              company="Skynet Systems"
                              hostName="Dr. Miles Dyson"
                              date="Oct 24, 2024"
                          />
                          <NeuSafetyInduction 
                                title="Site Safety Rules"
                                content={`1. All visitors must wear a badge at all times.\n2. In case of fire, use the nearest exit.\n3. Photography is prohibited in server rooms.`}
                                isAgreed={isSafetyAgreed}
                                onToggle={setIsSafetyAgreed}
                          />
                      </div>
                      <div className="space-y-6 max-w-sm mx-auto w-full">
                          <NeuKioskButton 
                              title="Check In" 
                              subtitle="I have an appointment"
                              icon={<LogIn size={32}/>}
                              onClick={() => showToast('Check-in flow started')}
                          />
                          <NeuKioskButton 
                              title="Walk In" 
                              subtitle="I need to see reception"
                              icon={<User size={32}/>}
                              variant="secondary"
                              onClick={() => showToast('Reception notified')}
                          />
                           <NeuPrintBadgeButton 
                              visitorName="Sarah Connor" 
                              onClick={() => showToast("Printing...")} 
                           />
                      </div>
                  </div>
              </section>

              {/* SECTION: SIGNAGE */}
              <section id="mm-signage" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Room Display (Signage)</h3>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8">
                      <NeuRoomStatusPanel 
                          roomName="Glass Conference Room" 
                          status="available"
                          onBookNow={() => showToast('Instant Booking Confirmed')}
                      />
                      <NeuRoomStatusPanel 
                          roomName="Focus Studio A" 
                          status="busy" 
                          currentMeeting={{subject: 'Q3 Product Sync', organizer: 'John Doe', endTime: '2:00 PM'}}
                          nextMeeting={{subject: 'Marketing Weekly', time: '2:30 PM'}}
                          onBookNow={() => showToast('Schedule opened')}
                      />
                  </div>
              </section>

              {/* SECTION: INSIGHTS & MAPS */}
              <section id="mm-insights" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Insights & Floor Plan</h3>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-8">
                           <NeuCard>
                               <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Floor Plan (Interactive)</h5>
                               <NeuFloorPlan 
                                    points={[
                                        {id: '1', x: 20, y: 30, status: 'available', type: 'room', label: 'Room A'},
                                        {id: '2', x: 70, y: 25, status: 'busy', type: 'room', label: 'Room B'},
                                        {id: '3', x: 45, y: 60, status: 'reserved', type: 'desk', label: 'Desk 12'},
                                        {id: '4', x: 55, y: 60, status: 'available', type: 'desk', label: 'Desk 13'},
                                    ]}
                                    onPointClick={(pt) => showToast(`Selected: ${pt.label}`)}
                               />
                           </NeuCard>
                           <NeuCard>
                               <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Occupancy Heatmap</h5>
                               <NeuOccupancyHeatmap 
                                    data={[
                                        {day: 'Mon', hour: 9, value: 40}, {day: 'Mon', hour: 10, value: 80}, {day: 'Mon', hour: 11, value: 90},
                                        {day: 'Tue', hour: 9, value: 30}, {day: 'Tue', hour: 10, value: 60}, {day: 'Tue', hour: 11, value: 85},
                                        {day: 'Wed', hour: 9, value: 50}, {day: 'Wed', hour: 10, value: 70}, {day: 'Wed', hour: 11, value: 95},
                                    ]}
                               />
                           </NeuCard>
                           <NeuFeedbackForm 
                                rating={4} 
                                tags={['Cleanliness', 'Equipment', 'Temperature', 'WiFi']} 
                                selectedTags={['Cleanliness']}
                                onRatingChange={()=>{}}
                                onTagsChange={()=>{}}
                                onSubmit={() => showToast('Feedback Submitted', 'success')}
                           />
                      </div>
                      <div className="space-y-8">
                          <NeuCard>
                              <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Room Utilization</h5>
                              <div className="flex justify-between items-end gap-4">
                                  <NeuInsightChart 
                                    title="Weekly Usage" 
                                    className="flex-1"
                                    data={[
                                        {label: 'Mon', value: 45},
                                        {label: 'Tue', value: 78},
                                        {label: 'Wed', value: 65},
                                        {label: 'Thu', value: 89, color: '#F59E0B'},
                                        {label: 'Fri', value: 32}
                                    ]}
                                  />
                                  <NeuCapacityGauge current={14} max={20} className="hidden sm:flex" />
                              </div>
                          </NeuCard>
                          <NeuCard>
                               <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Meeting Agenda</h5>
                               <div className="pl-2">
                                   <NeuAgendaItem time="10:00" title="Opening Remarks" duration="15m" isCompleted />
                                   <NeuAgendaItem time="10:15" title="Q3 Performance Review" presenter="Sarah J." duration="45m" isCompleted />
                                   <NeuAgendaItem time="11:00" title="Coffee Break" duration="15m" />
                                   <NeuAgendaItem time="11:15" title="Strategy Workshop" presenter="Mike R." duration="1h 30m" />
                               </div>
                          </NeuCard>
                      </div>
                  </div>
              </section>
              
               {/* SECTION: FACILITY OPERATIONS (NEW) */}
               <section id="mm-facility" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Facility Operations</h3>
                      <p className="text-gray-500">Wayfinding, IT monitoring, and hot-desking tools.</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-8">
                          <NeuWayfindingArrow direction="right" room="Boardroom" distance="50m" />
                          <NeuWayfindingArrow direction="left" room="Cafeteria" distance="20m" color="#F59E0B" />
                          <NeuCard>
                              <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Hot Desking</h5>
                              <div className="grid grid-cols-2 gap-4">
                                  <NeuDeskSelector deskId="D-01" status="available" features={['monitor', 'dock']} onSelect={() => setSelectedDesk('D-01')} className={selectedDesk === 'D-01' ? 'ring-2 ring-neu-accent' : ''} />
                                  <NeuDeskSelector deskId="D-02" status="booked" features={['monitor']} />
                              </div>
                          </NeuCard>
                          <NeuDashboardWidget title="Service Log">
                              <NeuServiceLog 
                                logs={[
                                    {id: '1', service: 'Coffee Machine Refill', room: 'Kitchen 4F', time: '10:00 AM', status: 'pending'},
                                    {id: '2', service: 'Projector Bulb', room: 'Room 3A', time: '09:30 AM', status: 'completed'},
                                ]}
                                onStatusChange={()=>{}}
                              />
                          </NeuDashboardWidget>
                      </div>
                      <div className="space-y-8">
                          <NeuQrScanner onScan={() => showToast("QR Code Scanned!", "success")} />
                          <NeuCard>
                              <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Device Health</h5>
                              <div className="space-y-4">
                                  <NeuDeviceMonitor deviceName="Room 101 Screen" status="online" ip="192.168.1.45" />
                                  <NeuDeviceMonitor deviceName="Lobby Kiosk" status="warning" lastPing="2m ago" />
                                  <NeuDeviceMonitor deviceName="3rd Floor Camera" status="offline" lastPing="4h ago" />
                              </div>
                          </NeuCard>
                          <NeuCateringMenu 
                             title="Fruit Platter" 
                             description="Seasonal fresh fruits sliced for easy sharing."
                             price="$25.00"
                             image="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400"
                             dietary={['VG', 'GF']}
                             onAdd={() => showToast('Added to cart')}
                          />
                      </div>
                  </div>
              </section>

               {/* SECTION: ADVANCED TOOLS (NEW) */}
               <section id="mm-adv" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Advanced Meeting Tools</h3>
                      <p className="text-gray-500">Scheduling patterns, in-meeting controls, and guest registration.</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                           <NeuRecurringBooking 
                                frequency={recurrenceFreq} 
                                days={recurrenceDays} 
                                onFrequencyChange={setRecurrenceFreq}
                                onDaysChange={setRecurrenceDays}
                           />
                           <NeuGuestForm 
                                guests={guestList} 
                                onAdd={(g) => setGuestList([...guestList, {...g, id: Date.now().toString()}])}
                                onRemove={(id) => setGuestList(guestList.filter(g => g.id !== id))}
                           />
                           <NeuResourceList 
                                resources={[
                                    {id: 'r1', name: 'Whiteboard Markers', status: resourceStatuses['r1'], lastChecked: 'Yesterday'},
                                    {id: 'r2', name: 'HDMI Cable', status: resourceStatuses['r2'], lastChecked: 'Today'},
                                ]}
                                onStatusToggle={(id, status) => setResourceStatuses({...resourceStatuses, [id]: status})}
                           />
                      </div>
                      <div className="space-y-6">
                          <NeuVisitorNotification 
                                visitorName="John Wick" 
                                hostName="Winston" 
                                location="Continental Lobby"
                                onAcknowledge={() => showToast("Acknowledged")}
                                onMessage={() => showToast("Message Sent")}
                          />
                          <NeuCard>
                              <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Meeting Control</h5>
                              <NeuMeetingTimer 
                                    durationMinutes={45} 
                                    onExtend={() => showToast("Extended by 15m")}
                                    onEnd={() => showToast("Meeting Ended")}
                              />
                          </NeuCard>
                          <NeuCard>
                              <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Room Layout</h5>
                              <NeuRoomLayoutPicker 
                                selectedLayoutId={selectedLayout} 
                                onChange={setSelectedLayout} 
                              />
                          </NeuCard>
                      </div>
                  </div>
              </section>

              {/* --- TASK MANAGER SECTIONS --- */}

              {/* SECTION: PROJECTS */}
              <section id="todo-projects" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Projects & Navigation</h3>
                      <p className="text-gray-500">Sidebar components for organizing workspaces.</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                      <div className="col-span-1">
                          <NeuCard className="h-full">
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Favorites</h4>
                              <div className="space-y-1">
                                  <NeuProjectItem name="Inbox" icon={<Inbox size={18}/>} count={4} isActive={activeProject === 'Inbox'} onClick={() => setActiveProject('Inbox')} />
                                  <NeuProjectItem name="Today" icon={<CalendarIcon size={18}/>} count={2} isActive={activeProject === 'Today'} onClick={() => setActiveProject('Today')} />
                                  <NeuProjectItem name="Upcoming" icon={<Layers size={18}/>} isActive={activeProject === 'Upcoming'} onClick={() => setActiveProject('Upcoming')} />
                              </div>
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-6 mb-4">My Projects</h4>
                              <div className="space-y-1">
                                  <NeuProjectItem name="Home Renovation" color="#EF4444" count={12} />
                                  <NeuProjectItem name="Design System" color="#6C63FF" count={5} />
                                  <NeuProjectItem name="Marketing" color="#10B981" />
                              </div>
                          </NeuCard>
                      </div>
                      <div className="col-span-2 space-y-6">
                           <NeuCard>
                               <h5 className="font-bold text-gray-700 mb-4">Inline Interactions</h5>
                               <div className="flex flex-col gap-4">
                                   <div className="flex items-center justify-between">
                                       <span className="text-gray-500 font-semibold">Project Name:</span>
                                       <NeuInlineEdit value={taskName} onSave={setTaskName} className="font-bold text-lg text-gray-800" />
                                   </div>
                                   <div className="flex items-center justify-between">
                                       <span className="text-gray-500 font-semibold">Priority:</span>
                                       <NeuPriorityFlag priority={taskPriority} onChange={setTaskPriority} />
                                   </div>
                                   <div className="flex items-center justify-between">
                                       <span className="text-gray-500 font-semibold">Due Date:</span>
                                       <div className="flex gap-2">
                                           <NeuDateBadge date={new Date()} />
                                           <NeuDateBadge date="Yesterday" isOverdue />
                                       </div>
                                   </div>
                               </div>
                           </NeuCard>
                      </div>
                  </div>
              </section>

               {/* SECTION: TASKS */}
               <section id="todo-tasks" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Task List & Sections</h3>
                  </div>
                  <NeuCard>
                      <NeuTaskListHeader 
                        title="Today" 
                        count={3} 
                        action={<NeuButton size="sm" variant="secondary" icon={<MoreVertical size={14}/>}>Sort</NeuButton>} 
                      />
                      <div className="space-y-2">
                          <NeuTaskItem id="t1" title="Review Q3 Roadmap" completed={false} onToggle={()=>{}} priority="high" />
                          <div className="pb-2">
                             <NeuSubtaskItem id="st1" title="Prepare slide deck" completed={true} onToggle={()=>{}} />
                             <NeuSubtaskItem id="st2" title="Gather team metrics" completed={false} onToggle={()=>{}} />
                          </div>
                          
                          <NeuSectionHeader title="Afternoon" count={2} onMenuClick={() => showToast("Section Menu")} />
                          
                          <NeuTaskItem id="t2" title="Sync with Engineering team" completed={false} onToggle={()=>{}} priority="medium" />
                          <NeuTaskItem id="t3" title="Update documentation" completed={true} onToggle={()=>{}} priority="low" />
                      </div>
                      <div className="mt-6">
                          <NeuAddButton isExpanded onClick={() => showToast("Add task clicked")} />
                      </div>
                  </NeuCard>
              </section>
              
               {/* SECTION: PRODUCTIVITY & FILTERS */}
               <section id="todo-productivity" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Productivity & Organization</h3>
                  </div>
                  <NeuCard>
                      <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-6">
                              <div>
                                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Quick Filters</p>
                                  <div className="flex flex-wrap gap-3">
                                      <NeuFilterPill label="All" isActive={filter === 'all'} count={12} onClick={() => setFilter('all')} />
                                      <NeuFilterPill label="Assigned to me" isActive={filter === 'me'} count={4} onClick={() => setFilter('me')} />
                                      <NeuFilterPill label="Priority 1" isActive={filter === 'p1'} onClick={() => setFilter('p1')} />
                                  </div>
                              </div>
                              
                              <div>
                                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Set Reminder</p>
                                  <NeuReminder date={new Date(new Date().setHours(14, 30))} isActive={reminderActive} onToggle={setReminderActive} />
                              </div>
                          </div>
                          
                          <div className="flex flex-col items-center justify-center">
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Daily Goal (Karma)</p>
                              <NeuProductivityChart current={4} goal={5} />
                              <div className="mt-4 flex gap-4 text-center">
                                  <div>
                                      <p className="text-lg font-bold text-gray-700">4</p>
                                      <p className="text-[10px] text-gray-400 font-bold uppercase">Completed</p>
                                  </div>
                                  <div>
                                      <p className="text-lg font-bold text-neu-accent">5</p>
                                      <p className="text-[10px] text-gray-400 font-bold uppercase">Goal</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </NeuCard>
              </section>

               {/* --- NEW ADVANCED PRODUCTIVITY SECTIONS --- */}

               {/* SECTION: QUICK ADD & INPUT */}
               <section id="adv-quickadd" className="space-y-6 scroll-mt-24">
                   <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Quick Add & Smart Input</h3>
                      <p className="text-gray-500">Inputs with embedded actions for rapid task entry.</p>
                  </div>
                  <NeuCard className="bg-neu-base/50">
                      <NeuQuickAdd onAdd={(val) => showToast(`Added: ${val}`)} />
                  </NeuCard>
               </section>

               {/* SECTION: BOARD CARDS */}
               <section id="adv-board" className="space-y-6 scroll-mt-24">
                   <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Kanban Board & Labels</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                       <NeuCard>
                           <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Board Card</h5>
                           <div className="w-full max-w-xs mx-auto">
                               <NeuBoardCard 
                                    title="Q3 Marketing Campaign Launch" 
                                    coverImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400"
                                    labels={[{id: '1', name: 'Marketing', color: '#10B981'}, {id: '2', name: 'High Priority', color: '#EF4444'}]}
                                    memberAvatars={['https://i.pravatar.cc/100?img=1', 'https://i.pravatar.cc/100?img=5']}
                                    commentCount={3}
                                    attachmentCount={2}
                                    onClick={() => showToast("Card Clicked")}
                               />
                           </div>
                       </NeuCard>
                       <NeuCard>
                            <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Label & Recurrence</h5>
                            <div className="space-y-8">
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-gray-700">Manage Labels</label>
                                    <NeuLabelPicker 
                                        labels={[
                                            {id: '1', name: 'Work', color: '#3B82F6'},
                                            {id: '2', name: 'Personal', color: '#10B981'},
                                            {id: '3', name: 'Urgent', color: '#EF4444'}
                                        ]}
                                        selectedIds={selectedLabels}
                                        onChange={setSelectedLabels}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-bold text-gray-700">Recurring Schedule</label>
                                    <NeuRecurringDate value={recurrence} onChange={setRecurrence} />
                                </div>
                            </div>
                       </NeuCard>
                  </div>
               </section>

               {/* SECTION: STATS RING */}
               <section id="adv-stats" className="space-y-6 scroll-mt-24">
                   <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Advanced Analytics</h3>
                  </div>
                  <NeuCard>
                      <div className="flex flex-col items-center">
                          <NeuStatsRing 
                            size={200}
                            rings={[
                                { value: 75, max: 100, color: '#EF4444', icon: <Flame size={12}/> },
                                { value: 45, max: 60, color: '#10B981', icon: <CheckCircle size={12}/> },
                                { value: 8, max: 12, color: '#3B82F6', icon: <Clock size={12}/> }
                            ]}
                          />
                          <div className="mt-8 flex gap-6">
                               <div className="text-center">
                                   <div className="flex items-center gap-1 text-red-500 font-bold justify-center"><Flame size={16}/> 75%</div>
                                   <span className="text-[10px] text-gray-400 font-bold uppercase">Energy</span>
                               </div>
                               <div className="text-center">
                                   <div className="flex items-center gap-1 text-emerald-500 font-bold justify-center"><CheckCircle size={16}/> 45</div>
                                   <span className="text-[10px] text-gray-400 font-bold uppercase">Tasks</span>
                               </div>
                               <div className="text-center">
                                   <div className="flex items-center gap-1 text-blue-500 font-bold justify-center"><Clock size={16}/> 8h</div>
                                   <span className="text-[10px] text-gray-400 font-bold uppercase">Focus</span>
                               </div>
                          </div>
                      </div>
                  </NeuCard>
               </section>


               {/* SECTION: TASK COMMENTS */}
               <section id="todo-details" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Comments & Activity</h3>
                  </div>
                  <NeuCard>
                      <div className="space-y-6">
                          <NeuComment 
                            author="Alice Chen" 
                            date="2 hours ago" 
                            content="I've attached the latest mockups for the dashboard. Let me know what you think about the shadow depth."
                          />
                          <NeuComment 
                            author="You" 
                            date="Just now" 
                            content="Looks great! I'll update the component library to match these specs."
                            avatar={<NeuAvatar size="sm" fallback="ME" />}
                            onDelete={() => showToast("Deleted")}
                          />
                      </div>
                      <div className="mt-6 flex gap-4">
                           <NeuAvatar size="sm" fallback="ME" />
                           <div className="flex-1">
                               <NeuTextarea placeholder="Write a comment..." className="mb-2 !min-h-[80px]" />
                               <div className="flex justify-end">
                                   <NeuButton size="sm" variant="accent">Post Comment</NeuButton>
                               </div>
                           </div>
                      </div>
                  </NeuCard>
              </section>

              {/* SECTION: INPUTS */}
              <section id="inputs" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Inputs & Search</h3>
                      <p className="text-gray-500">Form fields with pressed (concave) styling.</p>
                  </div>
                  <NeuCard>
                      <div className="grid md:grid-cols-2 gap-6">
                          <NeuInput label="Username" placeholder="Enter username" />
                          <NeuInput label="Password" type="password" placeholder="••••••" />
                          <NeuInput label="With Icon" icon={<User size={18}/>} placeholder="Profile name" />
                          <div className="flex flex-col">
                              <label className="mb-2 ml-1 text-sm font-bold text-gray-500 uppercase tracking-wider">Search Bar</label>
                              <NeuSearchBar 
                                  value={searchVal} 
                                  onChange={(e) => setSearchVal(e.target.value)} 
                                  placeholder="Search database..." 
                              />
                          </div>
                      </div>
                      <div className="mt-6">
                          <NeuTextarea label="Bio" placeholder="Tell us about yourself..." />
                      </div>
                  </NeuCard>
              </section>

              {/* SECTION: SELECTS & COMBOBOX */}
               <section id="selects" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Selects & Combobox</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                      <NeuCard className="h-64">
                          <NeuSelect 
                            label="Choose Role"
                            value={selectVal} 
                            onChange={setSelectVal} 
                            options={[
                                {value: '1', label: 'Administrator'},
                                {value: '2', label: 'Editor'},
                                {value: '3', label: 'Viewer'}
                            ]}
                            icon={<Users size={18}/>}
                          />
                      </NeuCard>
                      <NeuCard className="h-64">
                          <NeuCombobox 
                            label="Select Country"
                            value={comboVal}
                            onChange={setComboVal}
                            icon={<Globe size={18}/>}
                            options={[
                                {value: 'us', label: 'United States'},
                                {value: 'uk', label: 'United Kingdom'},
                                {value: 'ca', label: 'Canada'},
                                {value: 'au', label: 'Australia'},
                                {value: 'de', label: 'Germany'},
                                {value: 'fr', label: 'France'},
                                {value: 'jp', label: 'Japan'},
                            ]}
                          />
                      </NeuCard>
                  </div>
              </section>

              {/* SECTION: CHECKBOXES & RADIOS */}
              <section id="checkboxes" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Checkboxes & Radios</h3>
                  </div>
                  <NeuCard>
                      <div className="grid md:grid-cols-2 gap-12">
                          <div className="space-y-4">
                              <h5 className="font-bold text-gray-400 uppercase text-xs">Checkboxes</h5>
                              <NeuCheckbox checked={checkboxState} onChange={setCheckboxState} label="Accept Terms" />
                              <NeuCheckbox checked={!checkboxState} onChange={() => setCheckboxState(!checkboxState)} label="Subscribe to newsletter" />
                              <NeuCheckbox checked={true} onChange={() => {}} label="Disabled Checked" disabled />
                          </div>
                          <div>
                               <NeuRadioGroup 
                                name="plan"
                                label="Select Plan"
                                value={radioVal}
                                onChange={setRadioVal}
                                options={[
                                    {value: '1', label: 'Starter Plan'},
                                    {value: '2', label: 'Professional Plan'},
                                    {value: '3', label: 'Enterprise Plan'}
                                ]}
                               />
                          </div>
                      </div>
                  </NeuCard>
              </section>

              {/* SECTION: TOGGLES & SLIDERS */}
              <section id="toggles" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Toggles & Controls</h3>
                  </div>
                  <NeuCard>
                      <div className="flex flex-col gap-8 max-w-md">
                          <NeuToggle checked={toggleState} onChange={setToggleState} label="Airplane Mode" />
                          <NeuToggle checked={!toggleState} onChange={() => setToggleState(!toggleState)} label="Wi-Fi" />
                          <div className="pt-4">
                             <NeuSlider value={sliderVal} min={0} max={100} onChange={setSliderVal} label="Volume Level" />
                          </div>
                          <div>
                             <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Rating</p>
                             <NeuRating value={rating} onChange={setRating} />
                          </div>
                      </div>
                  </NeuCard>
              </section>
              
              {/* SECTION: TAG INPUT */}
              <section id="tag-input" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Tag Input</h3>
                  </div>
                  <NeuCard>
                      <NeuTagInput tags={tags} onTagsChange={setTags} label="Skills" />
                  </NeuCard>
              </section>
              
               {/* SECTION: FILE UPLOAD */}
               <section id="file-upload" className="space-y-6 scroll-mt-24">
                   <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">File Upload</h3>
                  </div>
                  <NeuCard>
                      <NeuFileUpload onFileSelect={(files) => showToast(`Selected ${files?.length} files`)} multiple />
                  </NeuCard>
              </section>

              {/* SECTION: METRIC CARDS */}
              <section id="metric-cards" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Metric Cards</h3>
                      <p className="text-gray-500">Dashboard widgets with sparklines and trends.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <NeuMetricCard title="Revenue" value="$24,500" trend={{value: 12, isPositive: true}} icon={<DollarSign size={20}/>} chartPath="M0 15 L20 10 L40 18 L60 5 L80 12 L100 2"/>
                      <NeuMetricCard title="Users" value="1,234" trend={{value: 5, isPositive: false}} icon={<Users size={20}/>} />
                      <NeuMetricCard title="Growth" value="+22%" trend={{value: 22, isPositive: true}} icon={<TrendingUp size={20}/>} />
                  </div>
              </section>

              {/* SECTION: TABLES */}
              <section id="tables" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Tables</h3>
                  </div>
                  <NeuCard>
                      <NeuTable 
                        columns={[
                            { header: 'User', accessorKey: 'name', render: (val) => <span className="font-bold">{val}</span> },
                            { header: 'Role', accessorKey: 'role' },
                            { header: 'Status', accessorKey: 'status', render: (val) => <NeuBadge variant={val === 'Active' ? 'success' : 'neutral'}>{val}</NeuBadge> },
                            { header: 'Action', accessorKey: 'id', render: () => <NeuIconButton size="sm" icon={<MoreVertical size={16}/>} /> }
                        ]}
                        data={[
                            { id: 1, name: 'Alice Johnson', role: 'Admin', status: 'Active' },
                            { id: 2, name: 'Bob Smith', role: 'Editor', status: 'Inactive' },
                            { id: 3, name: 'Charlie Brown', role: 'Viewer', status: 'Active' },
                        ]}
                      />
                  </NeuCard>
              </section>
              
               {/* SECTION: TIMELINES */}
              <section id="timelines" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Timeline</h3>
                  </div>
                  <NeuCard>
                      <NeuTimeline items={[
                          { id: '1', title: 'Order Placed', date: 'Just now', status: 'current', description: 'Your order #1234 has been placed successfully.' },
                          { id: '2', title: 'Payment Confirmed', date: '2 mins ago', status: 'completed' },
                          { id: '3', title: 'Shipped', date: 'Pending', status: 'pending' },
                      ]} />
                  </NeuCard>
              </section>

               {/* SECTION: CALENDARS */}
              <section id="calendars" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Calendar</h3>
                  </div>
                  <NeuCard className="flex justify-center">
                      <NeuCalendar selectedDate={date} onDateSelect={setDate} />
                  </NeuCard>
              </section>

               {/* SECTION: AVATARS & BADGES */}
              <section id="avatars" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Avatars & Badges</h3>
                  </div>
                  <NeuCard>
                      <div className="flex flex-col gap-8">
                          <div className="flex gap-4 items-end">
                              <NeuAvatar size="lg" fallback="JD" status="online" />
                              <NeuAvatar size="md" fallback="AB" status="busy" />
                              <NeuAvatar size="sm" fallback="XY" status="offline" />
                          </div>
                          <div>
                              <p className="text-xs font-bold text-gray-500 uppercase mb-2">Avatar Group</p>
                              <NeuAvatarGroup avatars={[{fallback: 'A'}, {fallback: 'B'}, {fallback: 'C'}, {fallback: 'D'}, {fallback: 'E'}]} />
                          </div>
                          <div className="flex gap-4 items-center">
                              <NeuBadge variant="success">Success</NeuBadge>
                              <NeuBadge variant="warning">Warning</NeuBadge>
                              <NeuBadge variant="danger">Error</NeuBadge>
                              <NeuBadge>Neutral</NeuBadge>
                          </div>
                          <div className="flex gap-8 items-center">
                              <NeuProgressCircle progress={75} size={100} />
                              <NeuProgressCircle progress={33} size={60} />
                          </div>
                      </div>
                  </NeuCard>
              </section>

              {/* SECTION: TABS & ACCORDION */}
              <section id="tabs" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Tabs & Accordion</h3>
                  </div>
                  <NeuCard>
                      <div className="mb-8">
                        <NeuTab 
                            activeTab={tab} 
                            onChange={setTab} 
                            items={[
                                { id: '1', label: 'Home', icon: <Home size={18}/> },
                                { id: '2', label: 'Profile', icon: <User size={18}/> },
                                { id: '3', label: 'Settings', icon: <Settings size={18}/> }
                            ]} 
                        />
                      </div>
                      <NeuAccordion items={[
                          { id: '1', title: 'What is Neumorphism?', content: 'Neumorphism combines flat design and skeuomorphism. It creates a soft, extruded plastic look.' },
                          { id: '2', title: 'How do I use this kit?', content: 'Simply import the components and use them in your React application. They are built with Tailwind CSS.' }
                      ]} />
                  </NeuCard>
              </section>

              {/* SECTION: BREADCRUMBS & PAGINATION */}
               <section id="breadcrumbs" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Breadcrumbs & Pagination</h3>
                  </div>
                  <NeuCard>
                      <div className="space-y-8">
                          <NeuBreadcrumb items={[{label: 'Dashboard', href: '#'}, {label: 'Projects', href: '#'}, {label: 'Details'}]} />
                          <NeuPagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
                      </div>
                  </NeuCard>
              </section>

              {/* SECTION: STEPPER */}
              <section id="steppers" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Stepper</h3>
                  </div>
                  <NeuCard>
                      <div className="px-4 py-4">
                          <NeuStepper 
                            steps={[{id:1, title: 'Cart'}, {id:2, title: 'Shipping'}, {id:3, title: 'Payment'}, {id:4, title: 'Confirm'}]} 
                            currentStep={currentStep}
                            onStepClick={setCurrentStep}
                          />
                      </div>
                      <div className="flex justify-between mt-8">
                          <NeuButton onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>Back</NeuButton>
                          <NeuButton onClick={() => setCurrentStep(Math.min(3, currentStep + 1))} disabled={currentStep === 3}>Next</NeuButton>
                      </div>
                  </NeuCard>
              </section>
              
               {/* SECTION: SHEETS */}
               <section id="sheets" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Sheet / Drawer</h3>
                  </div>
                  <NeuCard className="flex justify-center">
                      <NeuButton onClick={() => setIsSheetOpen(true)} icon={<Bell size={18}/>}>Open Drawer</NeuButton>
                  </NeuCard>
              </section>

               {/* SECTION: TREE VIEW */}
               <section id="tree-view" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Tree View</h3>
                  </div>
                  <NeuCard>
                      <NeuTreeView items={[
                          { id: '1', label: 'src', children: [
                              { id: '1-1', label: 'components', children: [{id: '1-1-1', label: 'Button.tsx'}, {id: '1-1-2', label: 'Card.tsx'}] },
                              { id: '1-2', label: 'App.tsx' }
                          ]},
                          { id: '2', label: 'package.json' }
                      ]} />
                  </NeuCard>
              </section>

               {/* SECTION: ALERTS */}
               <section id="alerts" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Alerts</h3>
                  </div>
                  <div className="space-y-4">
                      <NeuAlert variant="info" title="Information">This is a neutral info alert.</NeuAlert>
                      <NeuAlert variant="success" title="Success">Operation completed successfully.</NeuAlert>
                      <NeuAlert variant="warning" title="Warning">Please check your inputs.</NeuAlert>
                      <NeuAlert variant="danger" title="Error">Something went wrong.</NeuAlert>
                  </div>
              </section>

               {/* SECTION: DIALOGS */}
               <section id="dialogs" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Dialogs</h3>
                  </div>
                  <NeuCard className="flex justify-center flex-col gap-4 items-center">
                      <div className="flex gap-4">
                        <NeuButton onClick={() => setIsDialogOpen(true)}>Open Modal</NeuButton>
                        <NeuButton variant="secondary" onClick={() => setIsConfirmOpen(true)}>Open Confirmation</NeuButton>
                      </div>
                      <p className="text-sm text-gray-500 text-center">
                          (Click "Save Changes" inside the modal to trigger a nested confirmation)
                      </p>
                  </NeuCard>
              </section>

              {/* SECTION: DROPDOWNS */}
               <section id="dropdowns" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Dropdowns & Toasts</h3>
                  </div>
                  <NeuCard>
                      <div className="flex gap-4 justify-center items-center">
                           <NeuDropdown 
                            trigger={<NeuButton icon={<MoreVertical size={18}/>}>Options</NeuButton>}
                            items={[
                                { label: 'Edit', icon: <Edit size={16}/>, onClick: () => showToast('Edit clicked') },
                                { label: 'Share', icon: <Share2 size={16}/>, onClick: () => showToast('Share clicked') },
                                { label: 'Delete', icon: <Trash size={16}/>, variant: 'danger', onClick: () => showToast('Delete clicked', 'error') }
                            ]}
                           />
                           <NeuButton variant="accent" onClick={() => showToast("This is a success toast!", "success")}>Trigger Toast</NeuButton>
                      </div>
                  </NeuCard>
              </section>

              {/* SECTION: COMMAND PALETTE */}
              <section id="command-palette" className="space-y-6 scroll-mt-24">
                   <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Command Palette</h3>
                      <p className="text-gray-500">Power user menu. Press <NeuKeycap label="⌘" size="sm"/> <NeuKeycap label="K" size="sm"/> to try it.</p>
                  </div>
                  <NeuCard className="flex items-center justify-center py-12">
                      <NeuButton variant="primary" onClick={() => setIsCmdOpen(true)} icon={<Command size={18}/>}>Open Command Palette</NeuButton>
                  </NeuCard>
              </section>
              
               {/* SECTION: PRICING */}
               <section id="pricing" className="space-y-6 scroll-mt-24">
                   <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Pricing Card</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 items-start">
                      <NeuPricingCard planName="Basic" price="$0" features={[{text:'1 User', included:true}, {text:'Analytics', included:false}]} />
                      <NeuPricingCard planName="Pro" price="$29" isPopular features={[{text:'5 Users', included:true}, {text:'Analytics', included:true}]} />
                      <NeuPricingCard planName="Enterprise" price="$99" features={[{text:'Unlimited', included:true}, {text:'Analytics', included:true}]} />
                  </div>
              </section>

              {/* SECTION: CODE & KEYCAPS */}
              <section id="code" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Code & Keycaps</h3>
                  </div>
                  <NeuCard>
                      <div className="space-y-8">
                          <div className="flex gap-2">
                              <NeuKeycap label="Ctrl" />
                              <NeuKeycap label="Alt" />
                              <NeuKeycap label="Del" />
                          </div>
                          <NeuCodeSnippet label="Install" code="npm install @neu-ui/react" language="bash" />
                      </div>
                  </NeuCard>
              </section>
              
              {/* SECTION: OTP */}
              <section id="otp" className="space-y-6 scroll-mt-24">
                   <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">OTP Verification</h3>
                  </div>
                  <NeuCard className="flex flex-col items-center">
                      <p className="text-gray-500 mb-6 font-medium">Enter the 6-digit code sent to your device</p>
                      <NeuOTPInput onChange={(code) => console.log(code)} />
                      <div className="mt-8">
                          <NeuButton variant="secondary" size="sm">Resend Code</NeuButton>
                      </div>
                  </NeuCard>
              </section>

              {/* SECTION: CHAT BUBBLES */}
              <section id="chat" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Chat Bubbles</h3>
                  </div>
                  <NeuCard className="bg-neu-base/50">
                      <NeuChatBubble 
                        message="Hey! Have you seen the new Neumorphic UI kit?" 
                        timestamp="10:30 AM"
                        avatar={<NeuAvatar size="sm" fallback="A" />}
                      />
                      <NeuChatBubble 
                        message="Yes, I'm integrating it right now. The soft shadows look amazing!" 
                        isOwn 
                        timestamp="10:32 AM"
                        status="read"
                      />
                      <NeuChatBubble 
                        message="Awesome! Let me know if you need any help with the components." 
                        timestamp="10:35 AM"
                        avatar={<NeuAvatar size="sm" fallback="A" />}
                      />
                  </NeuCard>
              </section>

              {/* SECTION: EMPTY STATE */}
              <section id="empty-state" className="space-y-6 scroll-mt-24">
                  <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Empty State</h3>
                  </div>
                  <NeuCard>
                      <NeuEmptyState 
                        icon={<Inbox size={48} />} 
                        title="No messages yet" 
                        description="When you have messages, they will appear here. Start a conversation to get things going!"
                        action={<NeuButton icon={<MessageCircle size={18}/>}>Start Chat</NeuButton>}
                      />
                  </NeuCard>
              </section>

               {/* --- SAAS WIDGET SECTIONS --- */}

               {/* SECTION: BILLING */}
               <section id="billing" className="space-y-6 scroll-mt-24">
                   <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Billing & Plans</h3>
                  </div>
                  <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                      <NeuCreditCard 
                        cardNumber="4532 1245 8765 3210" 
                        cardHolder="ALEXANDER SMITH" 
                        expiryDate="09/28"
                        variant="dark"
                      />
                      <div className="space-y-8">
                           <NeuCreditCard 
                            cardNumber="4532 1245 8765 3210" 
                            cardHolder="ALEXANDER SMITH" 
                            expiryDate="09/28" 
                            variant="light"
                            className="scale-90"
                          />
                          <div className="flex justify-center">
                             <NeuPricingToggle isYearly={isYearly} onChange={setIsYearly} discountBadge="SAVE 20%" />
                          </div>
                      </div>
                  </div>
              </section>

               {/* SECTION: KANBAN & TASKS */}
               <section id="kanban" className="space-y-6 scroll-mt-24">
                   <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Tasks & Kanban</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-[500px]">
                      <NeuKanbanColumn title="To Do" count={2} onAddClick={() => showToast('Add Task Clicked')}>
                          <NeuTaskItem id="1" title="Research Competitors" completed={tasks['1']} onToggle={toggleTask} priority="high" />
                          <NeuTaskItem id="2" title="Draft Proposal" completed={tasks['2']} onToggle={toggleTask} priority="medium" />
                      </NeuKanbanColumn>
                      <NeuKanbanColumn title="In Progress" count={1}>
                          <NeuTaskItem id="3" title="Design System" completed={tasks['3']} onToggle={toggleTask} priority="high" />
                      </NeuKanbanColumn>
                       <NeuKanbanColumn title="Done">
                           <div className="opacity-50">
                               <NeuTaskItem id="4" title="Client Meeting" completed={true} onToggle={()=>{}} priority="low" />
                           </div>
                       </NeuKanbanColumn>
                  </div>
              </section>

              {/* SECTION: SOCIAL & REVIEWS */}
               <section id="social" className="space-y-6 scroll-mt-24">
                   <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Social & Reviews</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                      <NeuUserCard 
                        name="Sarah Connor" 
                        role="UX Designer" 
                        isFollowing={isFollowing}
                        onFollow={() => setIsFollowing(!isFollowing)}
                        stats={[
                            {label: 'Posts', value: '124'},
                            {label: 'Followers', value: '3.2k'},
                            {label: 'Following', value: '450'}
                        ]}
                      />
                      <div className="space-y-4">
                          <NeuActivityItem 
                            user={{name: 'Mike Ross'}} 
                            action="commented on" 
                            target="Project Alpha" 
                            time="2 hours ago"
                            icon={<MessageCircle size={10} />}
                          />
                          <NeuActivityItem 
                            user={{name: 'Rachel Zane'}} 
                            action="uploaded 3 files to" 
                            target="Design Assets" 
                            time="5 hours ago"
                            icon={<Zap size={10} />}
                          />
                           <NeuReviewCard 
                            author="Harvey Specter"
                            rating={5}
                            date="2 days ago"
                            content="Absolutely stunning UI kit. The attention to detail in the shadows is remarkable. Highly recommended for any SaaS project."
                           />
                      </div>
                  </div>
              </section>

               {/* SECTION: WIDGETS MISC */}
               <section id="widgets-misc" className="space-y-6 scroll-mt-24">
                   <div className="border-b border-gray-300/30 pb-4">
                      <h3 className="text-2xl font-bold text-gray-700">Filters & Pickers</h3>
                  </div>
                  <NeuCard>
                      <div className="space-y-8">
                          <div>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Filter Group</p>
                              <NeuFilterGroup 
                                options={[
                                    {id: 'all', label: 'All'},
                                    {id: 'active', label: 'Active'},
                                    {id: 'completed', label: 'Completed'},
                                    {id: 'archived', label: 'Archived'}
                                ]}
                                selectedId={selectedFilter}
                                onChange={setSelectedFilter}
                              />
                          </div>
                          <div>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Color Picker</p>
                              <NeuColorPicker 
                                colors={['#6C63FF', '#10B981', '#F59E0B', '#EF4444', '#3B82F6', '#8B5CF6']}
                                selectedColor={selectedColor}
                                onChange={setSelectedColor}
                              />
                          </div>
                      </div>
                  </NeuCard>
              </section>

          </main>
      </div>

    </div>
  );
};

export default App;