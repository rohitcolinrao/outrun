/* post a comment */
router.post('/:collectionType/:id/comments', function(req, res, next) {

  let comment = {
    comment: req.body.comment,
    email: req.body.email,
    timestamp: admin.firestore.Timestamp.fromMillis(Date.now())
  }
  let commentsRef = db.collection(req.params.collectionType).doc(req.params.id).collection("comments")
  let setComment = commentsRef.add(comment)
  .then((snapshot) => {
    //console.log(snapshot)
    res.status(200).send(snapshot);

  })
  .catch(err => {
    res.status(500).send("Error posting comment");
  })
})


/* get comments */
router.get('/:collectionType/:id/comments', function(req, res, next) {
  let commentsRef = db.collection(req.params.collectionType).doc(req.params.id).collection("comments")
  let getComments = commentsRef
  .orderBy("timestamp", "asc")
  .get()
  .then((snapshot) => {
    let res_data = []
    let formattedDate
    if(snapshot.docs.length > 0){
      snapshot.forEach((doc) => {
        let formatted_date = doc.data().timestamp.toDate()
        res_data.push({
          id: doc.id,
          ...doc.data(),
          timestamp: formatted_date
        })
      });
      res.status(200).send(res_data);
    }
    else{
      //console.log('no comments!');
      res.status(204).send("no comments");
    }
  })
  .catch(err => {
    res.status(500).send("Error getting comments docs");
  })
})





// firebase-service.js
const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

module.exports = admin
