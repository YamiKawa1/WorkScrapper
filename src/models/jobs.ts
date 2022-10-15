import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IJob {
  title: string;
  companyName: string;
  description: string;
  ubication: string;
  remote: boolean;
  type: string;
  applicants: number;
  experienceLevel: string;
  url: string;
  payRange: {min: string, max: string};
  category?: string;
}

// 2. Create a Schema corresponding to the document interface.
const jobSchema = new Schema<IJob>({
    title: { type: String, required: true },
    companyName: { type: String, required: true },
    description: { type: String, required: true },
    ubication: { type: String, required: true },
    remote: { type: Boolean, required: true },
    type: { type: String, required: true },
    applicants: { type: Number, required: true },
    experienceLevel: { type: String, required: true },
    url: { type: String, required: true },
    payRange: {min: { type: String, required: true }, max: { type: String, required: true }},
    category: { type: String, required: false }
});

// 3. Create a Model.
export const Job = model<IJob>('Job', jobSchema);

