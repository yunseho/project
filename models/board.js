/*
게시글 번호
작성자 
회원이 사용할 경우 userid값 받기
제목
내용
날짜
조회수 
*/

const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = class board extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            idx:{
                type:Sequelize.INTEGER(11),
                allowNull:false, 
                unique:true, 
            },
            subject:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            name:{
                type:Sequelize.STRING(50),
                allowNull:false,
            },
            content:{ 
                type:Sequelize.text,
                allowNull:false,
            },
            today:{
                type:Sequelize.DATEONLY,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get: function(){
                    return moment(this.getDateValue('boarddt')).format('YYYY-MM-DD')
            },
            hit:{
               type:Sequelize.INTEGER(11),
               defaultValue:0,
               auto_increment=1,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Board',
            tableName:'board',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    }
}
