import {Controller, Get} from "@nestjs/common";
import {TelemetryService} from "./telemetry.service";
import {Telemetry} from "../entities/telemetry.entity";

@Controller()
export class TelemetryController {
    constructor(
        private readonly telemetryService: TelemetryService
    ) { }

    @Get("v1/telemetry")
    async getAll(): Promise<Telemetry[]> {
        return await this.telemetryService.getAll();
    }

    // Get by datetime
    @Get("v1/telemetrylatest")
    async getLatest(): Promise<Telemetry> {
        return await this.telemetryService.getLatest();
    }
}
