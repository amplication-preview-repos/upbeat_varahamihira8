/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Facility as PrismaFacility,
  Hotel as PrismaHotel,
} from "@prisma/client";

export class FacilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FacilityCountArgs, "select">): Promise<number> {
    return this.prisma.facility.count(args);
  }

  async facilities(
    args: Prisma.FacilityFindManyArgs
  ): Promise<PrismaFacility[]> {
    return this.prisma.facility.findMany(args);
  }
  async facility(
    args: Prisma.FacilityFindUniqueArgs
  ): Promise<PrismaFacility | null> {
    return this.prisma.facility.findUnique(args);
  }
  async createFacility(
    args: Prisma.FacilityCreateArgs
  ): Promise<PrismaFacility> {
    return this.prisma.facility.create(args);
  }
  async updateFacility(
    args: Prisma.FacilityUpdateArgs
  ): Promise<PrismaFacility> {
    return this.prisma.facility.update(args);
  }
  async deleteFacility(
    args: Prisma.FacilityDeleteArgs
  ): Promise<PrismaFacility> {
    return this.prisma.facility.delete(args);
  }

  async getHotel(parentId: string): Promise<PrismaHotel | null> {
    return this.prisma.facility
      .findUnique({
        where: { id: parentId },
      })
      .hotel();
  }
}
