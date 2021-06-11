const ROLE = {
  BRACKET_BRICK_ADMIN: 'bracket_brick_admin',
  SCHOOL_ADMIN: 'school_admin',
  TEACHER: 'teacher',
  STUDENT: 'student'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Aji', role: ROLE.BRACKET_BRICK_ADMIN },
    { id: 2, name: 'admin', role: ROLE.SCHOOL_ADMIN },
    { id: 3, name: 'teacher', role: ROLE.TEACHER },
    { id: 4, name: 'student', role: ROLE.STUDENT },
  ],
  projects: [
    { id: 1, name: "Aji's Project", userId: 1 },
    { id: 2, name: "Admin's Project", userId: 2 },
    { id: 3, name: "Teacher's Project", userId: 3 },
    { id: 3, name: "Student's Project", userId: 4 }
  ]
}