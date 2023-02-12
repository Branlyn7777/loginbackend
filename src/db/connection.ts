import { Sequelize } from "sequelize";


const sequelize = new Sequelize('rrhh', 'postgres', '2023', {
    host: 'localhost',
    dialect: 'postgres',   
});

export default sequelize;