import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {TelemetryService} from "./telemetry.service";
import {Telemetry} from "../entities/telemetry.entity";

@Controller()
export class TelemetryController {
    constructor(
        private readonly telemetryService: TelemetryService
    ) { }

    @Get("v1/telemetry")
    async getAll(): Promise<Telemetry[]> {
        console.log('called!');
        
        return await this.telemetryService.getAll();
    }

    @Post("v1/telemetry")
    async postTelemetry(@Body() telemetry:Telemetry) {
        console.log(telemetry);

        return await this.telemetryService.postTelemetry(telemetry);
    }

    // Get by datetime
    @Get("v1/telemetrylatest")
    async getLatest(): Promise<Telemetry> {
        console.log('called!');

        return await this.telemetryService.getLatest();
    }

    // Get by datetime
    @Get("v1/getByDate/:date")
    async getByDate(@Param("date") date: string): Promise<Telemetry[]> {
        const re =  /\-/gi;
        date = date.replace(re, '/');
        console.log(date + "%");
        return await this.telemetryService.getByDate(date);
    }


}
