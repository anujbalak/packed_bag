const getCreatePage = (req, res) => {
    res.render('pages/create');
}

const getCreateItem = (req, res) => {
    res.render('pages/createItem');
}

const getCreateCategory = (req, res) => {
    res.render('pages/createCategory');
}

const postItem = (req, res) => {
    const { item, category} = req.query;

    res.redirect('/');
}