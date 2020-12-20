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

    // Get by date


     // get by time

}
