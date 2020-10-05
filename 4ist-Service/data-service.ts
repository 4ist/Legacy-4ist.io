
import * as configs from './config.json';
import mongoose from 'mongoose';
import { DevBlog } from './dev-blog';

const devBlogSchema = new mongoose.Schema({ 
    //! TODO - figure out a way to pass in the existing DevBlog model
    title: String,
    date: Date,
    body: String,
    imageURL: String
});

const BioModel = mongoose.model('Bio', new mongoose.Schema({body: String}));

const DevBlogModel = mongoose.model('DevBlog', devBlogSchema);

export class DataService{
    
    public connect(){
        const mongoCredentials = configs.credentials.mongo;
        const username = mongoCredentials.username;
        const password = mongoCredentials.password;
        const cluster = mongoCredentials.cluster;
        const database = mongoCredentials.database;
        const options = mongoCredentials.options;

        const mongoUri = `mongodb+srv://${username}:${password}@${cluster}.lngm0.mongodb.net/{${database}}?${options}`;

        mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
    }

    public disconnect(){
        mongoose.connection.close()
    }

    public postDevBlog(devblog: DevBlog){
        this.connect();

        const devBlogDBModel = new DevBlogModel({
            title: devblog.title,
            date: devblog.date,
            body: devblog.body,
            imageURL: devblog.imageURL
        })

        devBlogDBModel.save().then(result => {
        console.log('DevBlog saved!')

        this.disconnect();
        })
    }

    public async getDevBlogs(){
        this.connect();
        const devBlogs = await DevBlogModel.find({});
        this.disconnect();

        return devBlogs;
    }

    public async getBio(){
        this.connect();
        const bio = await BioModel.find({});
        this.disconnect();

        return bio;
    }

    
    public postBio(bio: string){
        this.connect();

        const bioDBModel = new BioModel({
            body: bio
        })

        bioDBModel.save().then(result => {
        console.log('bio saved!')

        this.disconnect();
        })
    }
}