let sets = [
    {set: 'Coffeeshop',
    songs: 'Not Ever',
id: 0},
    {set: 'Fireside',
    songs: 'Green Hill',
id: 1},
    {set: 'Youth Program',
    songs: 'Zen tanks',
id:2},
    {set: 'Church',
    songs: 'Amazing Grace',
id: 3},
    {set: 'Barnes and Noble',
    songs: 'Forever',
id:4},
    
];
let id = 0;

module.exports = {
    getSets: (req, res) => {
        res.status(200).send(sets);
    },

    newSet: (req, res) => {
        const {set, songs } = req.body;
        let item = {
            id: id,
            set: set,
            songs: songs,
        }
        sets.push(item);
        id++;
        res.status(200).send(sets);
    },



    editSet: (req, res) => {
        const { sets } = req.body;
        const updateID = req.params.id;
        const setIndex = sets.findIndex(set => set.id == updateID);
        let set = sets[setIndex];

        sets[setIndex] = {
            id: set.id,
            title: title || set.title,
            songs: set.songs
        };

        res.status(200).send(sets);
    },

    deleteSet: (req, res) => {
        // console.log(req.params.id)
        const deleteID = req.params.id;
        setIndex = sets.findIndex(set => set.id == deleteID);
        sets.splice(setIndex, 1);
        res.status(200).send(sets);
    }
};