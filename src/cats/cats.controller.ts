import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get('/:id')
    getAll(@Param('id') id: number, @Query('color') color : string) : void{
        console.log(color)
        console.log(id)
    }
}
