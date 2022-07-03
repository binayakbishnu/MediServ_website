const config = require('./dbConfig'),
    oracledb = require('oracledb');

const insertVals = async (id, firstName, lastName, email, password, queryType = 'insertVals') => {
    let con;
    try {
        con = await oracledb.getConnection({
            user: 'system',
            password: 'nib*DBB',
        });

        var q = `insert into profile values('${id}', '${firstName}', '${lastName}','${email}','${password}')`;
        const result = await con.execute(q, [], { autoCommit: true });

        return result;
    } catch (error) {
        console.warn(error);
    } finally {
        console.log(`${queryType} completed`);
        if (con) {
            try {
                await con.close();
            } catch (error) {
                console.error(error);
            }
        }
    }
}
const showVals = async (whereConditionCol, whereConditionVal, queryType = 'showVals') => {
    // console.log(config)
    // console.log(config.user)
    let con;
    try {
        con = await oracledb.getConnection({
            user: 'system',
            password: 'nib*DBB',
        });

        var q = `select * from profile where ${whereConditionCol}='${whereConditionVal}'`;
        const result = await con.execute(q);
        // console.log(result);
        // console.log(result.rows);
        return result;
    } catch (error) {
        console.error(error);
    } finally {
        console.log(`${queryType} completed`);
        if (con) {
            try {
                await con.close();
            } catch (error) {
                console.error(error);
            }
        }
    }
}

module.exports = {
    insertVals, showVals,
}
