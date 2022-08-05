const config = require('./dbConfig'),
    oracledb = require('oracledb');

const newUserInsert = async (id, firstName, lastName, email, password, queryType = 'newUserInsert') => {
    let con;
    try {
        con = await oracledb.getConnection({
            user: config.user,
            password: config.password,
        });

        var q = `insert into profile(id,first_name,last_name,email,password) values('${id}', '${firstName}', '${lastName}','${email}','${password}')`;
        const result = await con.execute(q, [], { autoCommit: true });
        return result;
    } catch (error) {
        console.warn(error);
        return error;
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

const newUserMoreDetails = async (id, year, month, date, phoneno, state, city, street, queryType = 'newUserMoreDeatils') => {
    let con;
    try {
        con = await oracledb.getConnection({
            user: config.user,
            password: config.password,
        });

        var q = `update profile set addr=address('${street}','${city}','${state}'), DOB=birthdate(${date},'${month}',${year}), phoneno=${phoneno}`
        const result = await con.execute(q, [], { autoCommit: true });
        return result;
    } catch (error) {
        console.warn(error);
        return false;
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

const loginCheck = async (email, password, queryType = 'login') => {
    let con;
    try {
        con = await oracledb.getConnection({
            user: config.user,
            password: config.password,
        });

        var q = `select email, password from profile where email='${email}' and password='${password}'`;
        const result = await con.execute(q);
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
    let con;
    try {
        con = await oracledb.getConnection({
            user: 'system',
            password: 'nib*DBB',
        });

        var q = `select * from profile where ${whereConditionCol}='${whereConditionVal}'`;
        const result = await con.execute(q);
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
    newUserInsert, newUserMoreDetails, loginCheck, showVals,
}
