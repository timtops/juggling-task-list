const _ = require('lodash')
const { v4: uuidv4 } = require('uuid')

module.exports = router => {
    router.post('/application/edit-evidence/has-evidence', (req, res) => {
        if(req.session.data.evidence.hasEvidence == "Yes") {
            res.redirect('/application/edit-evidence/upload')
        } else {
            res.redirect('/application/edit-evidence/check')

        }
    })

    router.post('/application/edit-evidence/upload', (req, res) => {

        // Create list of dummy files

        let files = [
            'file1.mp4',
            'file2.mp4',
            'file3.mp3'
        ]

        // Check if data.evidence.files exists, e.g. on first run
        if(!req.session.data.evidence.files) {
            req.session.data.evidence.files = {}
        }

        // Get the next file
        let filesCount = _.size(req.session.data.evidence.files)
        let nextFile = files[filesCount]

        // Storing that file in memory
        
        //    req.session.data.evidence.files[uuidv4()] = {
        //        filename: nextFile
        //    }
        

            res.redirect('/application/edit-evidence/check-files')
    })

    router.post('/application/edit-evidence/check-files', (req, res) => {
        if(req.session.data.evidence.addMore == "Yes") {
            res.redirect('/application/edit-evidence/upload')    
        } else {
            res.redirect('/application/edit-evidence/check')
        }
        
})
}