import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8001')

function connectNew(room) {
    socket.emit('connectNew', room)
}

function connectFirst(room) {
    socket.emit('connectFirst', room)
}

function subscribeToTimer(cb, room, time) {
    // socket.on('timer', time => cb(null, time))
    
    socket.emit('subscribeToTimer', room, time);

}

function receiveTimer(cb) {
    socket.on('timer', timestamp => {
        console.log('geting from server', timestamp)
        cb(null, timestamp)})
}

function resetTimer(room) {
    socket.emit('resetTimer', room)
}

function startTimer(room) {
    socket.emit('startTimer', room)
}

function fetchQuestion(room) {
    socket.emit('fetchQuestion', room)
}

function getQuestions(cb) {
        socket.on('question', questions => cb(null ,questions))
}

function subscribeToQuestions(cb){
    socket.on('sendQuestion', newQuestionIndex => cb(newQuestionIndex))
}

function nextQuestion(roomVar) {
    socket.emit('moveQuestionIndex', roomVar)
}

function leaveRoom(room) {
    socket.emit('disconnect', room)
}

function updateScore(room, user) {
    socket.emit('updateScore', room, user)
}

function fetchScore(roomVar, cb) {
    
    socket.on('showScore', users => cb(users))
    socket.emit('fetchScore', roomVar)

}

function submitUser(roomVar, user) {
    console.log('submitting user', user)
    socket.emit('connectNew', roomVar, user)
}

function startGame(roomVar, cb) {
    console.log('in start game')
    
    socket.emit('startGame', roomVar)
    // socket.on('firstQuestion', cb)
    
}

function firstQuestionHandler(cb) {
    socket.on('firstQuestion', cb)
}

export { subscribeToTimer, nextQuestion, subscribeToQuestions, connectFirst, startGame, firstQuestionHandler, submitUser, fetchScore, updateScore, receiveTimer, resetTimer, startTimer, connectNew, fetchQuestion, getQuestions, leaveRoom}