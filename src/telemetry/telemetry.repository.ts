import {EntityRepository, Repository} from "typeorm";
import {Telemetry} from "../entities/telemetry.entity";

@EntityRepository(Telemetry)
export class TelemetryRepository extends Repository<Telemetry> {
    getAll = async (): Promise<Telemetry[]> => {
        return await this.find({});
    }

    getLatest = async (): Promise<Telemetry> => {
        return await this.createQueryBuilder("telemetry").orderBy("id", "DESC").getOne();
    }

    getByDate = async (date): Promise<Telemetry[]> => {
        return await this.createQueryBuilder("telemetry").where("created_on like :date", {date: `%${date}%`}).getMany();
    }

    postTelemetry = async (telemetry:Telemetry) => {
        return await this.save(telemetry);
    }
}
