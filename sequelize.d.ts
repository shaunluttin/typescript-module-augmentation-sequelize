import 'sequelize';

declare module 'sequelize' {
    interface ManyToManyOptions {
        sourceKey?: string;
    }
}
