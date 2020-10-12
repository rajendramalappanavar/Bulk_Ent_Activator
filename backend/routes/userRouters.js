const router = require("express").Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const fetch = require('node-fetch');
global.atob = require("atob");
const request = require('request')
const {connection}=require("../config/db")


router.post("/login", async (req, res) => {
  try {
   const { email, password } = req.body;
   const body = {
	email: req.body.email,
	password: req.body.password,
	rememberMe: false,
};

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const re = await fetch("https://idp.app-framework.meltwater.io/login", {
	method: "post",
	body: JSON.stringify(body),
	headers: { "Content-Type": "application/json" },
    })

    const login_results = await re.json()

    if (!login_results.success) return res.status(400).json({ msg: "Invalid credentials." });

    const token = await login_results.token;

    res.json({
          token,
          user: {
            username: login_results.user.firstName,
            email: login_results.user.email
          },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/entitlements", async (req, res) => {
    const opids = req.body.opIdList;
    const entname = req.body.entName;
    const companyId = "1111";
    let bool = '';
    let counts = req.body.count;
    let results = [];
    if(req.body.checked === true){
        bool = "true"
    }else{
        bool = "false"
    }
    try {
    for (let i = 0; i < opids.length; i++) {
        var oppselect = "Select * from `entlist` Where `opporunity_id` = ?"
        const oppselectresult = connection.query(oppselect,[opids[i]]);
        if(oppselectresult.length >= 1)
        {
            var sqlselect = "Select * from `entlist` Where `opporunity_id` = ? AND `ent` = ?"
            const selectresult = connection.query(sqlselect,[opids[i],entname]);


            if(selectresult.length === 0){
                const insertSql = "INSERT INTO `entlist` (`id`, `opporunity_id`, `compnay_id`, `ent`, `sett`, `count`) VALUES (NULL, ?, ?, ?, ?, ?)";
                const insertResults = connection.query(insertSql,[opids[i],1111,entname,bool,counts]);
                results.push({OpId : opids[i], Message : "Success"})

            } else{
                     var sql = "UPDATE `entlist` SET `compnay_id` = ?, `sett` = ?, `count` = ? WHERE `opporunity_id` = ? AND `ent` = ?";
                     const result = connection.query(sql,[1111,bool,counts,opids[i],entname]);
                      if (result.affectedRows >= 1) {
                         results.push({OpId : opids[i], Message : "Successfully Activated"})
                       }
                }

        }else{
                results.push({OpId : opids[i], Message : "Opportunity Not found"})
        }

        }


    res.json(results);
      } catch (err) {
        results.push({Message : "Error"})
        console.log(err.message)
        res.status(500).json({ error: err.message });
      }
});




module.exports = router;