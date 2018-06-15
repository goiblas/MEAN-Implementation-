module.exports.test = (req) => {
    describe('Sould respond api urls', () => {
        it('/api/tasks', (done) => {
            req.get('/api/tasks').expect(200, done)
        })
    });
}