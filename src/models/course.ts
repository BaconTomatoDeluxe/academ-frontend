export interface Course {
  courseId: string;
  courseCode: string;
  graduateSchool: string;
  department: string;
  year: number;
  semester: string;
  name: string;
  professor: string;
  time: string;
  location: string;
  rating: number;
}

export const sampleCourse: Course[] = [
  {
    courseId: 'C001',
    courseCode: 'ENG101',
    graduateSchool: 'Engineering',
    department: 'Computer Science',
    year: 2024,
    semester: 'Spring',
    name: 'Introduction to Programming',
    professor: 'Dr. Jane Smith',
    time: 'Mon, Wed 10:00-11:30',
    location: 'Room 201',
    rating: 4.5,
  },
  {
    courseId: 'C002',
    courseCode: 'ENG102',
    graduateSchool: 'Engineering',
    department: 'Electrical Engineering',
    year: 2024,
    semester: 'Spring',
    name: 'Circuit Analysis',
    professor: 'Dr. Mike Brown',
    time: 'Tue, Thu 09:00-10:30',
    location: 'Room 305',
    rating: 4.2,
  },
  {
    courseId: 'C003',
    courseCode: 'LAW201',
    graduateSchool: 'Law',
    department: 'Criminal Law',
    year: 2024,
    semester: 'Spring',
    name: 'Criminal Justice',
    professor: 'Dr. Sarah Connor',
    time: 'Wed, Fri 13:00-14:30',
    location: 'Room 407',
    rating: 4.7,
  },
  {
    courseId: 'C004',
    courseCode: 'MED301',
    graduateSchool: 'Medicine',
    department: 'General Medicine',
    year: 2024,
    semester: 'Spring',
    name: 'Human Anatomy',
    professor: 'Dr. Greg House',
    time: 'Mon, Wed, Fri 08:00-09:30',
    location: 'Lab 204',
    rating: 4.8,
  },
  {
    courseId: 'C005',
    courseCode: 'BUS101',
    graduateSchool: 'Business',
    department: 'Marketing',
    year: 2024,
    semester: 'Spring',
    name: 'Principles of Marketing',
    professor: 'Dr. Emily White',
    time: 'Tue, Thu 14:00-15:30',
    location: 'Room 501',
    rating: 4.3,
  },
  {
    courseId: 'C006',
    courseCode: 'ART201',
    graduateSchool: 'Arts',
    department: 'Visual Arts',
    year: 2024,
    semester: 'Spring',
    name: 'Painting Techniques',
    professor: 'Dr. Robert Frost',
    time: 'Mon, Wed 12:00-13:30',
    location: 'Studio 3',
    rating: 4.6,
  },
  {
    courseId: 'C007',
    courseCode: 'SCI101',
    graduateSchool: 'Science',
    department: 'Biology',
    year: 2024,
    semester: 'Spring',
    name: 'General Biology',
    professor: 'Dr. Alice Waters',
    time: 'Tue, Thu 16:00-17:30',
    location: 'Room 202',
    rating: 4.4,
  },
  {
    courseId: 'C008',
    courseCode: 'HUM100',
    graduateSchool: 'Humanities',
    department: 'History',
    year: 2024,
    semester: 'Spring',
    name: 'World History',
    professor: 'Dr. Max Payne',
    time: 'Mon, Wed 15:00-16:30',
    location: 'Room 101',
    rating: 4.1,
  },
  {
    courseId: 'C009',
    courseCode: 'MTH202',
    graduateSchool: 'Science',
    department: 'Mathematics',
    year: 2024,
    semester: 'Spring',
    name: 'Calculus II',
    professor: 'Dr. Lisa Blue',
    time: 'Tue, Thu 10:00-11:30',
    location: 'Room 308',
    rating: 4.9,
  },
  {
    courseId: 'C010',
    courseCode: 'PSY101',
    graduateSchool: 'Psychology',
    department: 'Clinical Psychology',
    year: 2024,
    semester: 'Spring',
    name: 'Introduction to Psychology',
    professor: 'Dr. John Doe',
    time: 'Mon, Wed, Fri 09:00-10:30',
    location: 'Room 407',
    rating: 4.0,
  },
];
