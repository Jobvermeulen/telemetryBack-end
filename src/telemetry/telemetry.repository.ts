import {EntityRepository, Repository} from "typeorm";
import {Telemetry} from "../entities/telemetry.entity";

@EntityRepository(Telemetry)
export class TelemetryRepository extends Repository<Telemetry>
{
    getAll = async (): Promise<Telemetry[]> =>
    {
        return await this.find({});
    }

    getLatest = async (): Promise<Telemetry> =>
    {
        return  await this.createQueryBuilder("telemetry").orderBy("id", "DESC").getOne();
    }
}
