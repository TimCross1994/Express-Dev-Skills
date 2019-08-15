const devSkills = [
    {skill: "Typing"},
    {skill: "White Boarding"},
    {skill: "Music Selection"}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    return devSkills[id];
}

function getAll() {
    return devSkills; 
}
