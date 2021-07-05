const Employee = require('../lib/Employee.js')

test('creates Employee object', () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe('object')
})