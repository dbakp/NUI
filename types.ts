import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'primary' | 'secondary' | 'accent' | 'danger' | 'success' | 'warning' | 'info';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  variant?: Variant;
  icon?: ReactNode;
  isActive?: boolean;
  isRound?: boolean;
}

export interface CardProps extends BaseProps {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
  onClear?: () => void;
  className?: string;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  size?: Size;
  withIcon?: boolean;
}

export interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
  step?: number;
}

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export interface RadioOption {
  value: string;
  label: string;
  direction?: 'row' | 'column';
}

export interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  label?: string;
  direction?: 'row' | 'column';
  className?: string;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
}

export interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  icon?: ReactNode;
  error?: string;
}

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  error?: string;
  icon?: ReactNode;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export interface AlertProps {
  title?: string;
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'danger';
  icon?: ReactNode;
  className?: string;
  onClose?: () => void;
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: Size;
  status?: 'online' | 'offline' | 'busy' | 'away';
  className?: string;
}

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'info' | 'success' | 'primary';
}

export interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: ReactNode;
  variant?: 'default' | 'danger';
}

export interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  className?: string;
  position?: 'left' | 'right';
}

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export interface TableColumn<T> {
  header: string;
  accessorKey: keyof T;
  render?: (value: T[keyof T], item: T) => ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  className?: string;
}

export interface ToastProps {
  title?: string;
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  isVisible: boolean;
  onClose: () => void;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  position?: 'left' | 'right';
  footer?: ReactNode;
}

export interface CalendarProps {
  selectedDate?: Date;
  onDateSelect: (date: Date) => void;
  className?: string;
}

// --- SAAS COMPONENT TYPES ---

export interface Step {
    id: string | number;
    title: string;
    description?: string;
}

export interface StepperProps {
    steps: Step[];
    currentStep: number;
    onStepClick?: (stepIndex: number) => void;
    className?: string;
}

export interface FileUploadProps {
    onFileSelect: (files: FileList | null) => void;
    accept?: string;
    multiple?: boolean;
    label?: string;
    className?: string;
}

export interface MetricCardProps {
    title: string;
    value: string;
    trend?: {
        value: number;
        isPositive: boolean;
        label?: string;
    };
    icon?: ReactNode;
    className?: string;
    chartPath?: string;
}

export interface TagInputProps {
    tags: string[];
    onTagsChange: (tags: string[]) => void;
    placeholder?: string;
    label?: string;
    className?: string;
}

export interface TimelineItem {
    id: string;
    title: string;
    date: string;
    description?: string;
    icon?: ReactNode;
    status?: 'completed' | 'current' | 'pending';
}

export interface TimelineProps {
    items: TimelineItem[];
    className?: string;
}

export interface RatingProps {
    value: number;
    max?: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    className?: string;
}

// --- NEW PRO COMPONENT TYPES ---

export interface KeycapProps {
    label: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export interface AvatarGroupProps {
    avatars: { src?: string; alt?: string; fallback?: string }[];
    max?: number;
    size?: Size;
    className?: string;
}

export interface PricingFeature {
    text: string;
    included: boolean;
}

export interface PricingCardProps {
    planName: string;
    price: string;
    period?: string;
    features: PricingFeature[];
    isPopular?: boolean;
    buttonText?: string;
    onButtonClick?: () => void;
    className?: string;
}

export interface CommandItem {
    id: string;
    label: string;
    icon?: ReactNode;
    shortcut?: string[]; // e.g. ['Ctrl', 'K']
    onClick: () => void;
    group?: string;
}

export interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
    items: CommandItem[];
}

export interface CodeSnippetProps {
    code: string;
    language?: string;
    label?: string;
    className?: string;
}

export interface TreeItem {
    id: string;
    label: string;
    icon?: ReactNode;
    children?: TreeItem[];
    defaultOpen?: boolean;
}

export interface TreeViewProps {
    items: TreeItem[];
    className?: string;
    onSelect?: (itemId: string) => void;
}

// --- COMMUNICATION & UTILS ---

export interface OTPInputProps {
    length?: number;
    onChange: (otp: string) => void;
    className?: string;
}

export interface ChatBubbleProps {
    message: string;
    isOwn?: boolean;
    timestamp?: string;
    avatar?: ReactNode;
    status?: 'sent' | 'delivered' | 'read';
    className?: string;
}

export interface EmptyStateProps {
    icon: ReactNode;
    title: string;
    description?: string;
    action?: ReactNode;
    className?: string;
}

export interface SpinnerProps {
    size?: Size;
    className?: string;
}

export interface DividerProps {
    label?: string;
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}

// --- SAAS WIDGET TYPES ---

export interface CreditCardProps {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cardType?: 'visa' | 'mastercard';
  variant?: 'light' | 'dark';
  className?: string;
}

export interface PricingToggleProps {
  isYearly: boolean;
  onChange: (isYearly: boolean) => void;
  monthlyLabel?: string;
  yearlyLabel?: string;
  discountBadge?: string;
  className?: string;
}

export interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  priority?: 'low' | 'medium' | 'high';
  assigneeAvatar?: string;
  className?: string;
}

export interface KanbanColumnProps {
  title: string;
  count?: number;
  children: ReactNode;
  onAddClick?: () => void;
  className?: string;
}

export interface UserCardProps {
  name: string;
  role: string;
  avatarSrc?: string;
  stats?: { label: string; value: string }[];
  onFollow?: () => void;
  isFollowing?: boolean;
  className?: string;
}

export interface ActivityItemProps {
  user: { name: string; avatar?: string };
  action: string;
  target?: string;
  time: string;
  icon?: ReactNode;
  className?: string;
}

export interface ReviewCardProps {
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  content: string;
  className?: string;
}

export interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onChange: (color: string) => void;
  className?: string;
}

export interface FilterOption {
    id: string;
    label: string;
}

export interface FilterGroupProps {
    options: FilterOption[];
    selectedId: string;
    onChange: (id: string) => void;
    className?: string;
}

export interface CookieConsentProps {
    isOpen: boolean;
    onAccept: () => void;
    onDecline: () => void;
    className?: string;
}

// --- NEW TASK MANAGER / TODOIST SAAS TYPES ---

export interface ProjectItemProps {
    name: string;
    color?: string;
    count?: number;
    isActive?: boolean;
    onClick?: () => void;
    className?: string;
    icon?: ReactNode;
}

export interface PriorityFlagProps {
    priority: 1 | 2 | 3 | 4; // 1 is highest (Red), 4 is no priority (Grey)
    onChange?: (priority: 1 | 2 | 3 | 4) => void;
    className?: string;
}

export interface DateBadgeProps {
    date: Date | string;
    isOverdue?: boolean;
    className?: string;
}

export interface InlineEditProps {
    value: string;
    onSave: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export interface AddButtonProps {
    label?: string;
    onClick?: () => void;
    isExpanded?: boolean; 
    className?: string;
}

export interface CommentProps {
    author: string;
    avatar?: string;
    date: string;
    content: string;
    onDelete?: () => void;
    className?: string;
}

export interface TaskListHeaderProps {
    title: string;
    count?: number;
    action?: ReactNode;
    className?: string;
}

// --- NEW PRODUCTIVITY COMPONENTS ---

export interface SubtaskItemProps {
    id: string;
    title: string;
    completed: boolean;
    onToggle: (id: string) => void;
    className?: string;
}

export interface SectionHeaderProps {
    title: string;
    count?: number;
    className?: string;
    onMenuClick?: () => void;
}

export interface FilterPillProps {
    label: string;
    isActive: boolean;
    count?: number;
    onClick: () => void;
    className?: string;
}

export interface ReminderProps {
    date: Date;
    isActive: boolean;
    onToggle: (isActive: boolean) => void;
    className?: string;
}

export interface ProductivityChartProps {
    current: number;
    goal: number;
    label?: string;
    className?: string;
}

// --- NEW ADVANCED PRODUCTIVITY TYPES ---

export interface QuickAddProps {
    onAdd: (task: string) => void;
    placeholder?: string;
    className?: string;
}

export interface LabelItem {
    id: string;
    name: string;
    color: string;
}

export interface LabelPickerProps {
    labels: LabelItem[];
    selectedIds: string[];
    onChange: (ids: string[]) => void;
    className?: string;
}

export interface BoardCardProps {
    title: string;
    coverImage?: string;
    labels?: LabelItem[];
    memberAvatars?: string[];
    commentCount?: number;
    attachmentCount?: number;
    className?: string;
    onClick?: () => void;
}

export interface RingData {
    value: number;
    max: number;
    color: string;
    icon?: ReactNode;
}

export interface StatsRingProps {
    rings: RingData[];
    size?: number;
    className?: string;
}

export interface RecurringDateProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

// --- MEETING MANAGEMENT TYPES ---

export interface RoomCardProps {
    name: string;
    capacity: number;
    status: 'available' | 'busy' | 'cleaning';
    nextMeeting?: { time: string; subject: string };
    equipment?: string[];
    onBook?: () => void;
    className?: string;
}

export interface ServiceItemProps {
    id: string;
    name: string;
    description?: string;
    price?: string;
    icon?: ReactNode;
    quantity: number;
    onChange: (quantity: number) => void;
    className?: string;
}

export interface VisitorPassProps {
    visitorName: string;
    company?: string;
    hostName: string;
    date: string;
    qrCodeValue?: string; // Mock value to generate visual pattern
    className?: string;
}

export interface KioskActionProps {
    title: string;
    subtitle?: string;
    icon: ReactNode;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export interface RoomDisplayProps {
    roomName: string;
    status: 'available' | 'busy';
    currentMeeting?: { subject: string; organizer: string; endTime: string };
    nextMeeting?: { subject: string; time: string };
    onBookNow?: () => void;
    className?: string;
}

export interface BookingBlock {
    start: string; // HH:mm
    end: string; // HH:mm
    title: string;
}

export interface BookingTimelineProps {
    startTime: string; // e.g., "08:00"
    endTime: string;   // e.g., "18:00"
    bookings: BookingBlock[];
    className?: string;
}

// --- MEETING INSIGHTS & MAPS TYPES ---

export interface FloorPlanPoint {
    id: string;
    x: number; // percentage 0-100
    y: number; // percentage 0-100
    status: 'available' | 'busy' | 'reserved';
    label?: string;
    type: 'room' | 'desk';
}

export interface FloorPlanProps {
    imageUrl?: string; // Optional: background image
    points: FloorPlanPoint[];
    onPointClick?: (point: FloorPlanPoint) => void;
    className?: string;
}

export interface AmenityItem {
    id: string;
    label: string;
    icon: ReactNode;
}

export interface AmenitySelectorProps {
    amenities: AmenityItem[];
    selectedIds: string[];
    onChange: (ids: string[]) => void;
    className?: string;
}

export interface InsightDataPoint {
    label: string;
    value: number;
    color?: string;
}

export interface InsightChartProps {
    title: string;
    data: InsightDataPoint[];
    maxValue?: number;
    className?: string;
}

export interface AgendaItemProps {
    time: string;
    title: string;
    presenter?: string;
    duration?: string; // e.g. "15m"
    isCompleted?: boolean;
    className?: string;
}

export interface CapacityGaugeProps {
    current: number;
    max: number;
    label?: string;
    className?: string;
}

// --- FACILITY OPERATIONS TYPES ---

export interface WayfindingArrowProps {
    direction: 'left' | 'right' | 'straight' | 'back';
    room: string;
    distance?: string;
    color?: string;
    className?: string;
}

export interface CateringMenuProps {
    image?: string;
    title: string;
    description: string;
    price: string;
    dietary?: string[]; // e.g., 'VG', 'GF'
    onAdd?: () => void;
    className?: string;
}

export interface DeskSelectorProps {
    deskId: string;
    status: 'available' | 'booked' | 'unavailable';
    features?: string[];
    onSelect?: () => void;
    className?: string;
}

export interface QrScannerProps {
    isActive?: boolean;
    onScan?: () => void; // Simulation
    label?: string;
    className?: string;
}

export interface DeviceMonitorProps {
    deviceName: string;
    status: 'online' | 'offline' | 'warning';
    lastPing?: string;
    ip?: string;
    className?: string;
}

// --- NEW MEETING & VISITOR TYPES ---

export interface MeetingInviteProps {
    title: string;
    organizer: string;
    time: string;
    location: string;
    avatar?: string;
    status?: 'pending' | 'accepted' | 'declined';
    onResponse?: (response: 'accept' | 'decline' | 'maybe') => void;
    className?: string;
}

export interface VisitorLogItemProps {
    visitorName: string;
    company: string;
    host: string;
    checkInTime: string;
    isSignedOut?: boolean;
    onSignOut?: () => void;
    className?: string;
}

export interface CateringCartItemProps {
    name: string;
    price: string;
    quantity: number;
    notes?: string;
    onUpdateQuantity: (q: number) => void;
    onRemove: () => void;
    className?: string;
}

export interface FeedbackFormProps {
    rating: number;
    tags: string[];
    selectedTags: string[];
    onRatingChange: (r: number) => void;
    onTagsChange: (tags: string[]) => void;
    onSubmit: () => void;
    className?: string;
}

export interface SafetyInductionProps {
    title: string;
    content: string; // HTML or text
    isAgreed: boolean;
    onToggle: (agreed: boolean) => void;
    className?: string;
}

// --- MEETING SAAS EXPANSION TYPES (10 New) ---

export interface RecurringBookingProps {
    frequency: 'daily' | 'weekly' | 'monthly';
    days: string[]; // ['Mon', 'Tue', ...]
    endDate?: Date;
    onFrequencyChange: (freq: 'daily' | 'weekly' | 'monthly') => void;
    onDaysChange: (days: string[]) => void;
    className?: string;
}

export interface ResourceItem {
    id: string;
    name: string;
    status: 'working' | 'broken' | 'missing';
    lastChecked: string;
}

export interface ResourceListProps {
    resources: ResourceItem[];
    onStatusToggle: (id: string, status: 'working' | 'broken') => void;
    className?: string;
}

export interface VisitorNotificationProps {
    visitorName: string;
    hostName: string;
    location: string;
    onAcknowledge: () => void;
    onMessage: () => void;
    className?: string;
}

export interface ServiceLogItem {
    id: string;
    service: string;
    room: string;
    time: string;
    status: 'pending' | 'in-progress' | 'completed';
}

export interface ServiceLogProps {
    logs: ServiceLogItem[];
    onStatusChange: (id: string, status: ServiceLogItem['status']) => void;
    className?: string;
}

export interface RoomLayoutOption {
    id: string;
    label: string;
    icon: ReactNode;
}

export interface RoomLayoutPickerProps {
    selectedLayoutId: string;
    onChange: (id: string) => void;
    className?: string;
}

export interface MeetingTimerProps {
    durationMinutes: number; // e.g. 60
    onExtend: () => void;
    onEnd: () => void;
    className?: string;
}

export interface HeatmapCell {
    day: string;
    hour: number;
    value: number; // 0-100 occupancy
}

export interface OccupancyHeatmapProps {
    data: HeatmapCell[];
    className?: string;
}

export interface PrintBadgeButtonProps {
    visitorName: string;
    isPrinting?: boolean;
    onClick: () => void;
    className?: string;
}

export interface Guest {
    id: string;
    name: string;
    email: string;
}

export interface GuestFormProps {
    guests: Guest[];
    onAdd: (guest: Omit<Guest, 'id'>) => void;
    onRemove: (id: string) => void;
    className?: string;
}

export interface DashboardWidgetProps {
    title: string;
    action?: ReactNode;
    children: ReactNode;
    className?: string;
}
