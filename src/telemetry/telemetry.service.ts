import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {TelemetryRepository} from "./telemetry.repository";
import {Telemetry} from "../entities/telemetry.entity";

@Injectable()
export class TelemetryService{
    constructor(@InjectRepository(TelemetryRepository)
    private readonly telemetryRepository: TelemetryRepository,)
    { }

    async getAll(): Promise<Telemetry[]> {
        return await this.telemetryRepository.getAll();
    }

    async getLatest(): Promise<Telemetry>{
        return await this.telemetryRepository.getLatest();
    }

    // Get by date
    async getByDate(date): Promise<Telemetry[]> {
        return await this.telemetryRepository.getByDate(date);
    }

     // get by time

}
