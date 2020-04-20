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