var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM resume_view;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(resume_id, callback) {
    var query = 'CALL resumeadd_getinfo(? , ?, ?, ?)';
    var queryData = [resume_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
   // var query = 'INSERT INTO resume (resume_name, user_account_id) VALUES (?, ?)';

    // the question marks in the sql query above will be replaced by the values of the
    // the data in queryData
//    var queryData = [params.resume_name, params.account_id];


    var query = 'CALL resumeadd_getinfo(? , ?, ?, ?)';
    var queryData = [params.account_id, params.company_id, params.school_id, params.skill_id];
    //COMENTED OOUT THE 2 VAR CALLS

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

}

exports.delete = function(resume_id, callback) {
    var query = 'DELETE FROM resume WHERE resume_id = ?';
    var queryData = [resume_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.edit = function(resume_id, callback) {
    var query = 'CALL resume_getinfo(?)';
    var queryData = [resume_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.resume_add = function(callback) {
    var query = 'CALL resumeadd_getinfo()';


    connection.query(query, function(err, result) {
        callback(err, result);
    });
};