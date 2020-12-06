let model = require("../model/theme");

module.exports = {
    addTheme : function (req, res) {
       
        let newTheme = new model(req.body);

        newTheme.save((err, results) => {
            if (err) {
                console.error(err)
            } else {
                console.log('Saved: ', results);
                res.status(200).send(results)
            }
        })
    },
    getThemes: function (req, res) {
        model.find((err, results)=>{
            if (err) {
                console.error(err)
            } else {
                console.log('Result: ', results);
                res.status(200).send(results)
            }
        })
    },
    getThemeById: function (req, res) {
        model.findById(req.params.themeId,(err, results)=>{
            if (err) {
                console.error(err)

            } else {
                console.log('Result By Id: ', results);
                res.status(200).send(results)

            }
        })
    },
    deleteTheme: function (req, res) {
        model.deleteOne({_id: req.params.themeId},(err, results)=>{
            if (err) {
                console.error(err)
            } else {
                console.log('Deleted: ', results);
                res.status(200).send(results)

            }
        })
    },
    modifyTheme: function (req, res) {
        model.findByIdAndUpdate(req.params.themeId, req.body,{upsert: true}, (err, results)=>{
            if (err) {
                console.error(err)
            } else {
                console.log('Updated: ', req.body);
                res.status(200).send(req.body)

            }
        })
    }
}
